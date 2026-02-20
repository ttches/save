import { useState } from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import { useExpenses } from "../../context/ExpensesContext";
import styles from "./AddExpense.module.css";

const AddExpense = ({ onAdd }: { onAdd?: () => void }) => {
  const [expense, setExpense] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const { addExpense } = useExpenses();

  const handleAdd = () => {
    const name = expense.trim();
    if (!name || !monthlyCost) return;
    addExpense(name, monthlyCost);
    setExpense("");
    setMonthlyCost("");
    onAdd?.();
  };

  return (
    <div className={styles.card}>
      <div className={styles.inputs}>
        <LabeledInput
          label="expense"
          name="expense"
          value={expense}
          onChange={setExpense}
          numeric={false}
          autoFocus
          placeholder="rent"
        />
        <LabeledInput
          label="monthly cost"
          name="monthlyCost"
          value={monthlyCost}
          onChange={setMonthlyCost}
          placeholder="0"
        />
        <button className={styles.addButton} type="button" onClick={handleAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default AddExpense;
