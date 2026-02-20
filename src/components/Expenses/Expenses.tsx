import { useExpenses } from "../../context/ExpensesContext";
import { formatWithCommas } from "../../utils/formatNumber";
import useModal from "../../hooks/useModal";
import AddExpense from "../AddExpense/AddExpense";
import styles from "./Expenses.module.css";

const Expenses = () => {
  const { expenses } = useExpenses();
  const { open, close, Modal } = useModal();

  return (
    <div className={styles.card}>
      <button className={styles.addButton} type="button" onClick={open}>
        add expense
      </button>
      {expenses.length > 0 && (
        <ul className={styles.list}>
          {expenses.map((expense, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.name}>{expense.name}</span>
              <span className={styles.cost}>{formatWithCommas(expense.cost)}</span>
            </li>
          ))}
        </ul>
      )}
      <Modal>
        <AddExpense onAdd={close} />
      </Modal>
    </div>
  );
};

export default Expenses;
