"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import CandleChart from "./CandleChart";
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
  const [chartType, setChartType] = useState<any>("line");
  return (
    <Card className="w-full p-4 ">
      <div className="w-full flex justify-between items-center h-16">
        <Select
          defaultValue={chartType}
          onValueChange={(value) => setChartType(value)}
        >
          <SelectTrigger className=" text-[12px] w-1/5">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Chart Type</SelectLabel>
              <SelectItem value="line">LINE</SelectItem>
              <SelectItem value="candlestick">CANDLESTICK</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <CandleChart Symbol={Symbol} ChartType={chartType} />
    </Card>
  );
};

export default CompanyChart;
