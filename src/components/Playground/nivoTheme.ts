import type { Theme } from "@nivo/core";

export const darkBudgetTheme: Theme = {
  background: "transparent",
  text: {
    fontSize: 12,
    fill: "#e8e2f4",
  },
  axis: {
    domain: {
      line: {
        stroke: "#3d3554",
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: "#3d3554",
        strokeWidth: 1,
      },
      text: {
        fill: "#a196e4",
        fontSize: 11,
      },
    },
    legend: {
      text: {
        fill: "#e8e2f4",
        fontSize: 12,
      },
    },
  },
  grid: {
    line: {
      stroke: "#2a2845",
      strokeWidth: 1,
    },
  },
  legends: {
    text: {
      fill: "#a196e4",
      fontSize: 11,
    },
  },
  labels: {
    text: {
      fill: "#e8e2f4",
      fontSize: 12,
      fontWeight: 600,
    },
  },
  tooltip: {
    container: {
      background: "#191831",
      color: "#e8e2f4",
      fontSize: 13,
      borderRadius: "8px",
      border: "1px solid #3d3554",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    },
  },
};
