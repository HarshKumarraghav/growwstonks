"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import GainerLoser from "./GainerLoser";
import { useDataStore } from "@/utils/Hooks/useDataStore";
import { useEffect } from "react";
import ErrorComponent from "../Errors/Error";

const TabContainer = () => {
  const {
    data: GainerLoserData,
    isError,
    isLoading,
    error,
  } = useTopGainerLoser();
  const { setTickerValue } = useDataStore();
  useEffect(() => {
    GainerLoserData &&
      GainerLoserData?.top_gainers &&
      setTickerValue(GainerLoserData?.top_gainers[0]?.ticker);
  }, [GainerLoserData]);

  return (
    <Tabs defaultValue="gainer" className="w-full">
      <TabsList className="grid w-full sm:w-1/5 grid-cols-2">
        <TabsTrigger value="gainer">Gainers</TabsTrigger>
        <TabsTrigger value="loser">Losers</TabsTrigger>
      </TabsList>
      <TabsContent value="gainer" className="w-full">
        {isError ? (
          /* The `<ErrorComponent error={error} />` is rendering an error component and passing the
        `error` prop to it. This component is displayed when there is an error in fetching the data
        from the `useTopGainerLoser` hook. */
          <ErrorComponent error={error} />
        ) : (
          <GainerLoser
            GainerData={GainerLoserData?.top_gainers}
            value={"gainer"}
            isLoading={isLoading}
          />
        )}
      </TabsContent>
      <TabsContent value="loser" className="w-full">
        {isError ? (
          /* The `<ErrorComponent error={error} />` is rendering an error component and passing the
        `error` prop to it. This component is displayed when there is an error in fetching the data
        from the `useTopGainerLoser` hook. */
          <ErrorComponent error={error} />
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
