import { createContext, useContext, useState, type ReactNode } from "react";

type IncomeContextType = {
  monthlyIncome: string;
  setMonthlyIncome: (value: string) => void;
  savingsGoal: string;
  setSavingsGoal: (value: string) => void;
};

const IncomeContext = createContext<IncomeContextType | null>(null);

export const useIncome = () => {
  const ctx = useContext(IncomeContext);
  if (!ctx) throw new Error("useIncome must be used within IncomeProvider");
  return ctx;
};

export const IncomeProvider = ({ children }: { children: ReactNode }) => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");

  return (
    <IncomeContext.Provider value={{ monthlyIncome, setMonthlyIncome, savingsGoal, setSavingsGoal }}>
      {children}
    </IncomeContext.Provider>
  );
};
