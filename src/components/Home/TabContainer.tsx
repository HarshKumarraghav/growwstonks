"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import GainerLoser from "./GainerLoser";

const TabContainer = () => {
  const { data: GainerLoserData, isError, isLoading } = useTopGainerLoser();
  if (isError) return <div>failed to load</div>;
  return (
    <Tabs defaultValue="gainer" className="w-full">
      <TabsList className="grid w-full sm:w-1/5 grid-cols-2">
        <TabsTrigger value="gainer">Gainers</TabsTrigger>
        <TabsTrigger value="loser">Losers</TabsTrigger>
      </TabsList>
      <TabsContent value="gainer" className="w-full">
        <GainerLoser
          GainerData={GainerLoserData?.top_gainers}
          value={"gainer"}
          isLoading={isLoading}
        />
      </TabsContent>
      <TabsContent value="loser" className="w-full">
        <GainerLoser
          GainerData={GainerLoserData?.top_losers}
          value={"loser"}
          isLoading={isLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default TabContainer;
