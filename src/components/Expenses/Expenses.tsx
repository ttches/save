import { useExpenses } from "../../context/ExpensesContext";
import { formatWithCommas } from "../../utils/formatNumber";
import styles from "./Expenses.module.css";

const Expenses = () => {
  const { expenses } = useExpenses();

  if (expenses.length === 0) return null;

  return (
    <div className={styles.card}>
      <ul className={styles.list}>
        {expenses.map((expense, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.name}>{expense.name}</span>
            <span className={styles.cost}>{formatWithCommas(expense.cost)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
