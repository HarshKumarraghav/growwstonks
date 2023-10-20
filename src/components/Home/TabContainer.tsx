"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

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
        <GainerLoser GainerData={GainerLoser?.top_gainers} />
      </TabsContent>
      <TabsContent value="loser" className="w-full">
        <GainerLoser GainerData={GainerLoser?.top_losers} />
      </TabsContent>
    </Tabs>
  );
};

export default TabContainer;
