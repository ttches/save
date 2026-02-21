import { useState } from "react";
import { useIncome } from "../../context/IncomeContext";
import { useExpenses } from "../../context/ExpensesContext";
import { useSideHustles } from "../../context/SideHustlesContext";
import BudgetDonut from "../BudgetDonut/BudgetDonut";

const OVERVIEW_COLOR_MAP: Record<string, string> = {
  Expenses: "#ff638c",
  Savings: "#a6ff90",
  Leftovers: "#9fffff",
};

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

  const overviewColors = overviewData.map((d) => OVERVIEW_COLOR_MAP[d.id]);

  const [showDetail, setShowDetail] = useState(false);

  const detailData = expenses.map((e) => ({
    id: e.name,
    label: e.name,
    value: Number(e.cost) || 0,
  }));

  const handleCenterClick = () => {
    if (showDetail) return setShowDetail(false);
    if (expenses.length > 0) return setShowDetail(true);
  };

  if (showDetail) {
    return (
      <BudgetDonut
        data={detailData}
        colors={DETAIL_COLORS}
        centerValue={totalExpenses}
        onCenterClick={handleCenterClick}
      />
    );
  }

  return (
    <BudgetDonut
      data={overviewData}
      colors={overviewColors}
      centerValue={total}
      onCenterClick={handleCenterClick}
    />
  );
};

export default BudgetOverview;
