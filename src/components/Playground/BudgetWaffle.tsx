import { ResponsiveWaffle } from "@nivo/waffle";
import { darkBudgetTheme } from "./nivoTheme";
import { dummyTotalExpenses, dummySavings, dummyDiscretionary, dummyTotal } from "./dummyData";
import styles from "./Playground.module.css";

const BudgetWaffle = () => {
  const data = [
    { id: "expenses", label: "Expenses", value: dummyTotalExpenses },
    { id: "savings", label: "Savings", value: dummySavings },
    { id: "spending", label: "Spending", value: Math.max(0, dummyDiscretionary) },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.chartContainer} style={{ height: 300 }}>
        <ResponsiveWaffle
          data={data}
          total={dummyTotal}
          rows={14}
          columns={10}
          padding={2}
          theme={darkBudgetTheme}
          colors={["#ff638c", "#a6ff90", "#9fffff"]}
          borderRadius={3}
          motionStagger={2}
          margin={{ top: 10, right: 10, bottom: 50, left: 10 }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateY: 40,
              itemsSpacing: 4,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              symbolSize: 14,
              symbolShape: "square",
              itemTextColor: "#a196e4",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default BudgetWaffle;
