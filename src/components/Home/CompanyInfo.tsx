"use client";
import React from "react";

import { Card, CardFooter, CardHeader } from "../ui/card";
// import { DummyCompany } from "@/utils/Dummy/Company";
import { Button } from "../ui/button";
import { useDataStore } from "@/utils/Hooks/useDataStore";
import { useCompanyInfo } from "@/utils/Hooks/useCompanyInfo";
import CardSkeletonLoader from "../Loader/CardSkeletonLoader";
const CompanyInfo = () => {
  const { tickerValue } = useDataStore();
  const { data: info, isError, isLoading } = useCompanyInfo(tickerValue);
  if (isError)
    return (
      <div className="w-sreeen min-h-[100vh-6rem] justify-center items-center flex text-xl font-bold">
        <h1>
          Something went wrong! Check your internet connection or try to reload.
        </h1>
      </div>
    );
  if (isLoading || info.length === 0) return <CardSkeletonLoader />;
  return (
    <>
      {tickerValue && (
        <div className="w-[450px] hidden sm:flex h-[350px]">
          <Card className="fixed mt-10  w-[450px]">
            <CardHeader>
              <div className="flex justify-between items-center">
                <span className="text-sm font-thin">
                  COMPANY<span className="text-[12px]">(Symbol)</span>
                </span>
                <span className="text-sm font-thin">COUNTRY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {info?.Name}
                  <span className="text-[12px]">{`(${info?.Symbol})`}</span>
                </span>
                <span className="text-sm font-medium">{info?.Country}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-thin">SECTOR</span>
                <span className="text-sm font-thin">INDUSTRY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{info?.Sector}</span>
                <span className="text-sm font-medium">{info?.Industry}</span>
              </div>
              <div className="text-sm text-muted-foreground border-t py-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-thin">DESCRIPTION</span>
                </div>
                {info?.Description}
              </div>
            </CardHeader>
            <CardFooter className="border-t py-2 w-full flex justify-end">
              <Button variant={"outline"}>Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default CompanyInfo;
