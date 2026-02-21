import { useIncome } from "../../context/IncomeContext";
import { useExpenses } from "../../context/ExpensesContext";
import { useSideHustles } from "../../context/SideHustlesContext";
import { formatWithCommas } from "../../utils/formatNumber";
import styles from "./Summary.module.css";

const Summary = () => {
  const { monthlyIncome, savingsGoal } = useIncome();
  const { expenses } = useExpenses();
  const { sideHustles } = useSideHustles();

  if (!monthlyIncome) return null;

  const income = Number(monthlyIncome) || 0;
  const savings = Number(savingsGoal) || 0;
  const totalExpenses = expenses.reduce((sum, e) => sum + (Number(e.cost) || 0), 0);
  const totalSideHustles = sideHustles.reduce((sum, h) => sum + (Number(h.income) || 0), 0);

  const monthly = income + totalSideHustles - totalExpenses - savings;
  const weekly = monthly / (30 / 7);
  const daily = monthly / 30;

  const formatNum = (n: number) => {
    const prefix = n < 0 ? "-" : "";
    return prefix + formatWithCommas(Math.abs(Math.round(n)).toString());
  };

  return (
    <div className={styles.card}>
      <div className={styles.rows}>
        <div className={styles.row}>
          <span className={styles.label}>daily</span>
          <span className={styles.value}><span className={styles.dollar}>$ </span>{formatNum(daily)}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>weekly</span>
          <span className={styles.value}><span className={styles.dollar}>$ </span>{formatNum(weekly)}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>monthly</span>
          <span className={styles.value}><span className={styles.dollar}>$ </span>{formatNum(monthly)}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
