import { useState } from "react";
import { useIncome } from "../../context/IncomeContext";
import { useExpenses } from "../../context/ExpensesContext";
import { useSideHustles } from "../../context/SideHustlesContext";
import BudgetDonut from "../BudgetDonut/BudgetDonut";
import useModal from "../../hooks/useModal";

const OVERVIEW_COLORS = ["#ff638c", "#a6ff90", "#9fffff"];

const DETAIL_COLORS = [
  "#d971d5",
  "#ff638c",
  "#ff9d02",
  "#fad003",
  "#a6ff90",
  "#9fffff",
  "#169fff",
  "#a196e4",
];

const BudgetOverview = () => {
  const { monthlyIncome, savingsGoal } = useIncome();
  const { expenses } = useExpenses();
  const { sideHustles } = useSideHustles();
  const { open, Modal } = useModal();
  const [drillDown, setDrillDown] = useState<{
    data: { id: string; label: string; value: number }[];
    total: number;
  } | null>(null);

  const income = Number(monthlyIncome) || 0;
  const savings = Number(savingsGoal) || 0;
  const totalExpenses = expenses.reduce((sum, e) => sum + (Number(e.cost) || 0), 0);
  const totalSideHustles = sideHustles.reduce((sum, h) => sum + (Number(h.income) || 0), 0);
  const total = income + totalSideHustles;
  const discretionary = total - totalExpenses - savings;

  if (total === 0) return null;

  const overviewData = [
    { id: "Expenses", label: "Expenses", value: totalExpenses },
    { id: "Savings", label: "Savings", value: savings },
    { id: "Leftovers", label: "Leftovers", value: Math.max(0, discretionary) },
  ].filter((d) => d.value > 0);

  const handleSliceClick = (slice: { id: string }) => {
    if (slice.id === "Expenses" && expenses.length > 0) {
      setDrillDown({
        data: expenses.map((e) => ({
          id: e.name,
          label: e.name,
          value: Number(e.cost) || 0,
        })),
        total: totalExpenses,
      });
      open();
    }
  };

  return (
    <>
      <BudgetDonut
        data={overviewData}
        colors={OVERVIEW_COLORS}
        centerValue={total}
        onSliceClick={handleSliceClick}
      />
      <Modal>
        {drillDown && (
          <BudgetDonut
            data={drillDown.data}
            colors={DETAIL_COLORS}
            centerValue={drillDown.total}
          />
        )}
      </Modal>
    </>
  );
};

export default BudgetOverview;
