"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader } from "../ui/card";
import { GainerLoser } from "../../../types/types";

const TabContainer = () => {
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
            <div className="flex justify-between items-center ">
              <span className="text-sm font-thin">TICKER</span>
              <div className="flex w-1/2 justify-between">
                <span className="text-sm font-thin">PRICE</span>
                <span className="text-sm font-thin">CHANGE AMOUNT</span>
                <span className="text-sm font-thin">CHANGE PERCENTAGE</span>
                <span className="text-sm font-thin">VOLUME</span>
              </div>
            </div>
          </CardHeader>
          {GainerLoser?.top_gainers?.map((item: GainerLoser) => (
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-primary">
                  {item?.ticker}
                </span>
                <div className="flex w-1/2 justify-between text-center">
                  <span className="text-sm font-medium">${item?.price}</span>
                  <span className="text-sm font-medium">
                    {item?.change_amount}
                  </span>
                  <span className="text-sm font-medium">
                    {item?.change_percentage}
                  </span>
                  <span className="text-sm font-medium">{item?.volume}</span>
                </div>
              </div>
            </CardContent>
          ))}
        </Card>
      </TabsContent>
      <TabsContent value="loser" className="w-full">
        <Card className="w-full"></Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabContainer;
