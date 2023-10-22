"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "next-themes";
import { ChartData } from "../../../types/types";
type CandleChartProps = {
  Symbol: string;
  FilteredStockData: ChartData[];
  ChartType:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined;
};
const Chart = ({ Symbol, FilteredStockData, ChartType }: CandleChartProps) => {
  const { theme } = useTheme();

  return (
    <div className="sm:h-[450px] h-[300px]">
      <ReactApexChart
        series={[
          {
            data: [...FilteredStockData],
          },
        ]}
        height={"100%"}
        options={{
          colors: ["#16a34a"],
          grid: {
            borderColor: theme === "dark" ? "#535A6C" : "#E9ECEF",
            strokeDashArray: 4,
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
          theme: {
            mode: theme === "dark" ? "dark" : "light",
          },
          chart: {
            type: "line",
            background: "none",
          },
          title: {
            text: Symbol,
            align: "center",
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
        }}
        type={ChartType}
      />
    </div>
  );
};

export default Chart;
