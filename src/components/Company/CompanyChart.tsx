import React, { useState } from "react";
import { Card } from "../ui/card";
import CandleChart from "./CandleChart";

type CompanyChartProps = {
  Symbol: string;
};

const CompanyChart = ({ Symbol }: CompanyChartProps) => {
  return (
    <Card className="w-full p-4 ">
      <div className="w-full flex justify-between items-center h-16"></div>
      <CandleChart Symbol={Symbol} />
    </Card>
  );
};

export default CompanyChart;
