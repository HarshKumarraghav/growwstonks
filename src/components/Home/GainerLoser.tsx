"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent, CardHeader } from "../ui/card";
import { GainerLoser } from "../../../types/types";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
type GainerLoserProps = {
  GainerData: GainerLoser[];
  value: string;
};

const GainerLoser = ({ GainerData, value }: GainerLoserProps) => {
  const [selectedValue, setSelectedValue] = useState("price");
  return (
    <Card className="w-full">
      <CardHeader className="w-full border-b mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-thin">TICKER</span>
          <div className="hidden sm:flex w-1/2 justify-between">
            <span className="text-sm font-thin">PRICE</span>
            <span className="text-sm font-thin">CHANGE AMOUNT</span>
            <span className="text-sm font-thin">CHANGE PERCENTAGE</span>
            <span className="text-sm font-thin">VOLUME</span>
          </div>
          <div className="flex sm:hidden w-1/3 justify-between">
            <Select
              defaultValue={selectedValue}
              onValueChange={(value) => setSelectedValue(value)}
            >
              <SelectTrigger className="w-full text-[12px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Top Gainers</SelectLabel>
                  <SelectItem value="price">PRICE</SelectItem>
                  <SelectItem value="change_amount">CHANGE AMOUNT</SelectItem>
                  <SelectItem value="change_percentage">
                    CHANGE PERCENTAGE
                  </SelectItem>
                  <SelectItem value="volume">VOLUME</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      {GainerData?.map(
        ({
          ticker,
          price,
          change_amount,
          change_percentage,
          volume,
        }: GainerLoser) => (
          <CardContent key={ticker}>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-primary">{ticker}</span>
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
                      className={`text-sm font-medium flex gap-1 justify-center items-center ${
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
          </CardContent>
        )
      )}
    </Card>
  );
};

export default GainerLoser;
