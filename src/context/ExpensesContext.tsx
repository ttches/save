import { createContext, useContext, useState, type ReactNode } from "react";

type Expense = {
  name: string;
  cost: string;
};

type ExpensesContextType = {
  expenses: Expense[];
  addExpense: (name: string, cost: string) => void;
};

const ExpensesContext = createContext<ExpensesContextType | null>(null);

export const useExpenses = () => {
  const ctx = useContext(ExpensesContext);
  if (!ctx) throw new Error("useExpenses must be used within ExpensesProvider");
  return ctx;
};

export const ExpensesProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (name: string, cost: string) => {
    setExpenses((prev) => [...prev, { name, cost }]);
  };

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
