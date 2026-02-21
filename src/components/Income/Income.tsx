import LabeledInput from "../LabeledInput/LabeledInput";
import { useIncome } from "../../context/IncomeContext";
import styles from "./Income.module.css";

const Income = () => {
  const { monthlyIncome, setMonthlyIncome, savingsGoal, setSavingsGoal } = useIncome();

  return (
    <div className={styles.card}>
      <div className={styles.inputs}>
        <LabeledInput
          label="monthly income"
          name="monthlyIncome"
          value={monthlyIncome}
          onChange={setMonthlyIncome}
          placeholder="0"
        />
        <LabeledInput
          label="savings goal"
          name="savingsGoal"
          value={savingsGoal}
          onChange={setSavingsGoal}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default Income;
