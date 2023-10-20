"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader } from "../ui/card";
import { GainerLoser } from "../../../types/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TabContainer = () => {
  const [selectedValue, setSelectedValue] = useState("price");
  const { data: GainerLoser } = useTopGainerLoser();
  console.log("data", GainerLoser);

  return (
    <Tabs defaultValue="gainer" className="w-full">
      <TabsList className="grid w-full sm:w-1/5 grid-cols-2">
        <TabsTrigger value="gainer">Gainers</TabsTrigger>
        <TabsTrigger value="loser">Losers</TabsTrigger>
      </TabsList>
      <TabsContent value="gainer" className="w-full">
        <Card className="w-full ">
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
                      <SelectItem value="change_amount">
                        CHANGE AMOUNT
                      </SelectItem>
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
          {GainerLoser?.top_gainers?.map(
            ({
              ticker,
              price,
              change_amount,
              change_percentage,
              volume,
            }: GainerLoser) => (
              <CardContent key={ticker}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">
                    {ticker}
                  </span>
                  <div className="hidden sm:flex w-1/2 justify-between text-center">
                    <span className="text-sm font-medium">${price}</span>
                    <span className="text-sm font-medium">{change_amount}</span>
                    <span className="text-sm font-medium">
                      {change_percentage}
                    </span>
                    <span className="text-sm font-medium">{volume}</span>
                  </div>
                  <div className="flex sm:hidden w-1/2 justify-between text-center">
                    <span className="text-sm font-medium">
                      ${selectedValue}
                    </span>
                  </div>
                </div>
              </CardContent>
            )
          )}
        </Card>
      </TabsContent>
      <TabsContent value="loser" className="w-full">
        <Card className="w-full"></Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabContainer;
