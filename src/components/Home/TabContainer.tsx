"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import GainerLoser from "./GainerLoser";
import { useDataStore } from "@/utils/Hooks/useDataStore";
import { useEffect } from "react";

const TabContainer = () => {
  const { data: GainerLoserData, isError, isLoading } = useTopGainerLoser();
  const { setTickerValue } = useDataStore();
  useEffect(() => {
    GainerLoserData &&
      GainerLoserData?.top_gainers &&
      setTickerValue(GainerLoserData?.top_gainers[0]?.ticker);
  }, [GainerLoserData]);

  if (isError)
    return (
      <div className="w-sreeen min-h-[100vh-6rem] justify-center items-center flex text-xl font-bold">
        <h1>
          Something went wrong! Check your internet connection or try to reload.
        </h1>
      </div>
    );
  return (
    <Tabs defaultValue="gainer" className="w-full">
      <TabsList className="grid w-full sm:w-1/5 grid-cols-2">
        <TabsTrigger value="gainer">Gainers</TabsTrigger>
        <TabsTrigger value="loser">Losers</TabsTrigger>
      </TabsList>
      <TabsContent value="gainer" className="w-full">
        {GainerLoserData?.Information ? (
          <div className="flex justify-between items-center bg-secondary p-4 text-red-500 rounded-xl">
            <span className="text-sm font-thin">
              {GainerLoserData?.Information}
            </span>
          </div>
        ) : (
          <GainerLoser
            GainerData={GainerLoserData?.top_gainers}
            value={"gainer"}
            isLoading={isLoading}
          />
        )}
      </TabsContent>
      <TabsContent value="loser" className="w-full">
        {GainerLoserData?.Information ? (
          <div className="flex justify-between items-center bg-secondary p-4 text-red-500 rounded-xl">
            <span className="text-sm font-thin">
              {GainerLoserData?.Information}
            </span>
          </div>
        ) : (
          <GainerLoser
            GainerData={GainerLoserData?.top_losers}
            value={"loser"}
            isLoading={isLoading}
          />
        )}
      </TabsContent>
    </Tabs>
  );
};

export default TabContainer;
