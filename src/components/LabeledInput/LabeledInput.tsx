import type { ReactNode } from "react";
import { formatWithCommas, parseNumericInput } from "../../utils/formatNumber";
import styles from "./LabeledInput.module.css";

type LabeledInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  labelExtra?: ReactNode;
  numeric?: boolean;
  allowDecimal?: boolean;
};

const LabeledInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  autoFocus,
  labelExtra,
  numeric = true,
  allowDecimal = false,
}: LabeledInputProps) => {
  const displayValue = numeric ? formatWithCommas(value) : value;

  const handleChange = (v: string) =>
    onChange(numeric ? parseNumericInput(v, allowDecimal) : v);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        {labelExtra}
      </div>
      <input
        type="text"
        id={name}
        name={name}
        value={displayValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete="off"
        className={styles.input}
      />
    </div>
  );
};

export default LabeledInput;
