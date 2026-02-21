import { ResponsiveBar } from "@nivo/bar";
import { darkBudgetTheme } from "./nivoTheme";
import { dummyExpenses } from "./dummyData";
import styles from "./Playground.module.css";

const ExpensesBars = () => {
  const data = dummyExpenses
    .map((e) => ({
      expense: e.name,
      cost: e.cost,
    }))
    .sort((a, b) => b.cost - a.cost);

  return (
    <div className={styles.card}>
      <div
        className={styles.chartContainer}
        style={{ height: Math.max(200, dummyExpenses.length * 40 + 40) }}
      >
        <ResponsiveBar
          data={data}
          keys={["cost"]}
          indexBy="expense"
          layout="horizontal"
          theme={darkBudgetTheme}
          colors={["#a196e4"]}
          margin={{ top: 0, right: 50, bottom: 0, left: 90 }}
          padding={0.3}
          borderRadius={4}
          enableGridX={false}
          enableGridY={false}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={{
            tickSize: 0,
            tickPadding: 8,
            tickRotation: 0,
          }}
          enableLabel={true}
          label={(d) => `$${d.value}`}
          labelTextColor="#15152a"
          labelSkipWidth={40}
          isInteractive={true}
          motionConfig="gentle"
          valueFormat={(v) => `$${v}`}
        />
      </div>
    </div>
  );
};

export default ExpensesBars;
