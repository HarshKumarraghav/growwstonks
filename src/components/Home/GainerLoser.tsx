"use client";
import React, { useState } from "react";

import { Card, CardContent, CardHeader } from "../ui/card";
import { GainerLoser } from "../../../types/types";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import Header from "./Header";
import SkeletonLoader from "../Loader/SkeletonLoader";
type GainerLoserProps = {
  GainerData: GainerLoser[];
  value: string;
  isLoading: boolean;
};

const GainerLoser = ({ GainerData, value, isLoading }: GainerLoserProps) => {
  const [selectedValue, setSelectedValue] = useState("price");
  return (
    <Card className="w-full">
      <CardHeader className="w-full border-b mb-4">
        <Header
          selectedValue={selectedValue}
          value={value}
          setSelectedValue={setSelectedValue}
        />
      </CardHeader>
      {isLoading ? (
        <>
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
        </>
      ) : (
        <CardContent>
          {GainerData?.map(
            ({
              ticker,
              price,
              change_amount,
              change_percentage,
              volume,
            }: GainerLoser) => (
              <div className="flex justify-between items-center" key={ticker}>
                <span className="text-sm font-medium text-primary">
                  {ticker}
                </span>
                <div className="hidden sm:flex w-1/2 justify-between text-center">
                  <span className="text-sm font-medium">${price}</span>
                  <span className="text-sm font-medium">{change_amount}</span>
                  <div
                    className={`text-sm font-medium flex gap-1 justify-center items-center ${
                      value === "gainer" ? "text-primary" : "text-red-500"
                    }`}
                  >
                    {value === "gainer" ? <ArrowBigUp /> : <ArrowBigDown />}
                    <span>{change_percentage}%</span>
                  </div>
                  <span className="text-sm font-medium">{volume}</span>
                </div>
                <div className="flex sm:hidden w-1/3 justify-end text-end">
                  <span className="text-sm font-medium">
                    {selectedValue === "price" && <>${price}</>}
                    {selectedValue === "change_amount" && change_amount}
                    {selectedValue === "change_percentage" && (
                      <div
                        className={`text-sm font-medium flex gap-1 justify-center text-end items-center ${
                          value === "gainer" ? "text-primary" : "text-red-500"
                        }`}
                      >
                        {value === "gainer" ? <ArrowBigUp /> : <ArrowBigDown />}
                        <span>{change_percentage}%</span>
                      </div>
                    )}
                    {selectedValue === "volume" && volume}
                  </span>
                </div>
              </div>
            )
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default GainerLoser;
