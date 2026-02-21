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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className={styles.card} onKeyDown={handleKeyDown}>
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
