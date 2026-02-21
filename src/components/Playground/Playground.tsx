import BudgetDonut from "./BudgetDonut";
import ExpensesBars from "./ExpensesBars";
import BudgetWaffle from "./BudgetWaffle";
import styles from "./Playground.module.css";

const Playground = () => {
  return (
    <div className={styles.container}>
      <BudgetDonut />
      <ExpensesBars />
      <BudgetWaffle />
    </div>
  );
};

export default Playground;
