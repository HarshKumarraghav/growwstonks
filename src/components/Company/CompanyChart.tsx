"use client";
import React, { useMemo, useState } from "react";
import { Card } from "../ui/card";
import { handleFilterChange } from "@/utils/Function/ChartFilter";
import { StockChartDataFormat } from "@/utils/Function/ChartDataFormat";
import { useStockChartData } from "@/utils/Hooks/useStockChartData";
import Chart from "../Chart/Chart";
import ChartLoader from "../Loader/ChartLoader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type CompanyChartProps = {
  Symbol: string;
};

const CompanyChart = ({ Symbol }: CompanyChartProps) => {
  const [day, setDay] = useState<string>("1year");
  const [chartType, setChartType] = useState<any>("line");
  const {
    data: StockChartRawData,
    isError,
    isLoading,
  } = useStockChartData(Symbol);
  const seriesData = StockChartDataFormat(
    StockChartRawData,
    "Weekly Adjusted Time Series"
  );

  const FilteredStockData = useMemo(
    () => handleFilterChange(day, seriesData),
    [day, seriesData]
  );
  if (isError) return null;
  if (isLoading) return <ChartLoader />;
  return (
    <>
      <Card className="w-full p-4 ">
        <div className="w-full flex justify-center flex-col gap-3 items-center">
          <h1 className="text-xl font-bold">{Symbol} Chart</h1>
          <h1 className="text-xl font-bold"> Chart (Past {day})</h1>
        </div>
        <Chart
          Symbol={Symbol}
          FilteredStockData={FilteredStockData}
          ChartType={chartType}
        />
        <div className=" flex flex-col sm:flex-row w-full mt-10 justify-between items-center gap-3">
          <div className="flex justify-center">
            <button
              className={`p-2 shadow-md border rounded-l-md w-14 ${
                day === "24hr"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("24hr")}
            >
              24hr
            </button>
            <button
              className={`p-2 shadow-md border-r border-b border-t w-14 ${
                day === "7days"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("7days")}
            >
              7d
            </button>
            <button
              className={`p-2 shadow-md border-r border-b border-t w-14 ${
                day === "1month"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("1month")}
            >
              1m
            </button>

            <button
              className={`p-2 shadow-md border-r border-b border-t w-14 ${
                day === "1year"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("1year")}
            >
              1y
            </button>
            <button
              className={`p-2 shadow-md border-r border-b border-t w-14 ${
                day === "10years"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("10years")}
            >
              10y
            </button>
            <button
              className={`p-2 shadow-md border-r border-b border-t rounded-r-md w-14 ${
                day === "20years"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("20years")}
            >
              20y
            </button>
          </div>
          <Select
            defaultValue={chartType}
            onValueChange={(value: any) => setChartType(value)}
          >
            <SelectTrigger className="w-full sm:w-1/4 text-[12px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Chart Type</SelectLabel>
                <SelectItem value="line">Line</SelectItem>
                <SelectItem value="candlestick">CandleStick</SelectItem>
                <SelectItem value="area">Area</SelectItem>
                <SelectItem value="bar">Bar</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </Card>
    </>
  );
};

export default CompanyChart;
