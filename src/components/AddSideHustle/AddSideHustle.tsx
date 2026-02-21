import { useState } from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import { useSideHustles } from "../../context/SideHustlesContext";
import styles from "./AddSideHustle.module.css";

const AddSideHustle = ({ onAdd }: { onAdd?: () => void }) => {
  const [name, setName] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const { addSideHustle } = useSideHustles();

  const handleAdd = () => {
    const trimmed = name.trim();
    if (!trimmed || !monthlyIncome) return;
    addSideHustle(trimmed, monthlyIncome);
    setName("");
    setMonthlyIncome("");
    onAdd?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className={styles.card} onKeyDown={handleKeyDown}>
      <div className={styles.inputs}>
        <LabeledInput
          label="side hustle"
          name="sideHustle"
          value={name}
          onChange={setName}
          numeric={false}
          autoFocus
          placeholder="freelance"
        />
        <LabeledInput
          label="monthly income"
          name="monthlyIncome"
          value={monthlyIncome}
          onChange={setMonthlyIncome}
          placeholder="0"
        />
        <button className={styles.addButton} type="button" onClick={handleAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default AddSideHustle;
