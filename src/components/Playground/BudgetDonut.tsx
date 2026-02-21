import { ResponsivePie } from "@nivo/pie";
import { formatWithCommas } from "../../utils/formatNumber";
import { darkBudgetTheme } from "./nivoTheme";
import { dummyTotalExpenses, dummySavings, dummyDiscretionary, dummyTotal } from "./dummyData";
import styles from "./Playground.module.css";

const BudgetDonut = () => {
  const data = [
    { id: "Expenses", label: "Expenses", value: dummyTotalExpenses },
    { id: "Savings", label: "Savings", value: dummySavings },
    { id: "Spending", label: "Spending", value: Math.max(0, dummyDiscretionary) },
  ].filter((d) => d.value > 0);

  return (
    <div className={styles.card}>
      <div className={styles.chartContainer} style={{ height: 280 }}>
        <ResponsivePie
          data={data}
          theme={darkBudgetTheme}
          colors={["#ff638c", "#a6ff90", "#9fffff"]}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          innerRadius={0.55}
          padAngle={2}
          cornerRadius={4}
          activeOuterRadiusOffset={4}
          borderWidth={0}
          enableArcLinkLabels={false}
          arcLabelsSkipAngle={20}
          arcLabelsTextColor="#15152a"
          motionConfig="gentle"
        />
        <div className={styles.donutCenter}>
          <div className={styles.donutLabel}>total</div>
          <div className={styles.donutValue}>
            ${formatWithCommas(dummyTotal.toString())}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetDonut;
