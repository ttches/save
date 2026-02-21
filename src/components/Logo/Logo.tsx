import { useRef } from "react";
import { useIncome } from "../../context/IncomeContext";
import { useExpenses } from "../../context/ExpensesContext";
import { useSideHustles } from "../../context/SideHustlesContext";
import { save, remove } from "../../utils/localStorage";
import styles from "./Logo.module.css";

const RESET_CLICKS = 5;
const RESET_WINDOW = 1000;

const Logo = () => {
  const { monthlyIncome, savingsGoal, setMonthlyIncome, setSavingsGoal } = useIncome();
  const { expenses } = useExpenses();
  const { sideHustles } = useSideHustles();
  const clickTimestamps = useRef<number[]>([]);

  const handleClick = () => {
    const now = Date.now();
    clickTimestamps.current = [...clickTimestamps.current.filter((t) => now - t < RESET_WINDOW), now];

    if (clickTimestamps.current.length >= RESET_CLICKS) {
      clickTimestamps.current = [];
      remove("monthlyIncome");
      remove("savingsGoal");
      remove("expenses");
      remove("sideHustles");
      setMonthlyIncome("");
      setSavingsGoal("");
      window.location.reload();
      return;
    }

    save("monthlyIncome", monthlyIncome);
    save("savingsGoal", savingsGoal);
    save("expenses", expenses);
    save("sideHustles", sideHustles);
  };

  return (
    <p className={styles.title} onClick={handleClick}>
      <span className={styles.purple}>sa</span>
      <span className={styles.gold}>ve</span>
    </p>
  );
};

export default Logo;
