"use client";
import { StockChartDataFormat } from "@/utils/Function/ChartDataFormat";
import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartDummy } from "@/utils/Dummy/Chart";
import { useTheme } from "next-themes";
type CandleChartProps = {
  Symbol: string;
  ChartType:
    | "area"
    | "line"
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
const CandleChart = ({ Symbol, ChartType }: CandleChartProps) => {
  const { theme } = useTheme();
  const seriesData = useMemo(
    () => StockChartDataFormat(ChartDummy, "Weekly Adjusted Time Series"),
    [ChartDummy]
  );
  return (
    <div className="sm:h-[450px] h-[300px]">
      <ReactApexChart
        series={[
          {
            data: seriesData,
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
            type: ChartType,
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

export default CandleChart;
