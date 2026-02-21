import { ResponsivePie } from "@nivo/pie";
import { formatWithCommas } from "../../utils/formatNumber";
import { darkBudgetTheme } from "../Playground/nivoTheme";
import styles from "./BudgetDonut.module.css";

type DonutSlice = {
  id: string;
  label: string;
  value: number;
};

type BudgetDonutProps = {
  data: DonutSlice[];
  colors: string[];
  centerValue: number;
  onSliceClick?: (slice: DonutSlice) => void;
};

const BudgetDonut = ({ data, colors, centerValue, onSliceClick }: BudgetDonutProps) => {
  return (
    <div className={styles.chartContainer}>
      <ResponsivePie
        data={data}
        theme={darkBudgetTheme}
        colors={colors}
        margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
        innerRadius={0.55}
        padAngle={2}
        cornerRadius={4}
        activeOuterRadiusOffset={4}
        borderWidth={0}
        enableArcLinkLabels={true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#e8e2f4"
        arcLinkLabelsThickness={1}
        arcLinkLabelsColor={{ from: "color" }}
        arcLinkLabelsDiagonalLength={12}
        arcLinkLabelsStraightLength={8}
        arcLinkLabelsTextOffset={4}
        arcLabelsSkipAngle={20}
        arcLabelsTextColor="#15152a"
        motionConfig="gentle"
        onClick={onSliceClick ? (datum) => onSliceClick(datum.data) : undefined}
      />
      <div className={styles.donutCenter}>
        <div className={styles.donutValue}>
          ${formatWithCommas(centerValue.toString())}
        </div>
      </div>
    </div>
  );
};

export default BudgetDonut;
