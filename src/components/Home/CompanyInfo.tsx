"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button, buttonVariants } from "../ui/button";
import { useDataStore } from "@/utils/Hooks/useDataStore";
import { useCompanyInfo } from "@/utils/Hooks/useCompanyInfo";
import CardSkeletonLoader from "../Loader/CardSkeletonLoader";
import ErrorComponent from "../Errors/Error";
import Link from "next/link";
import { CompanyInfo } from "../../../types/types";

const CompanyInfo = () => {
  const { tickerValue } = useDataStore();

  /**
   * The function checks if an object is empty by counting the number of keys it has.
   * @param {CompanyInfo} obj - The parameter `obj` is of type `CompanyInfo`.
   * @returns a boolean value. It will return true if the object `obj` is empty (i.e., it has no
   * properties), and false otherwise.
   */
  function isObjectEmpty(obj: CompanyInfo) {
    if (Object.keys(obj).length === 0) return true;
  }

  const { data: info, isError, isLoading, error } = useCompanyInfo(tickerValue);
  console.log("info", info);

  if (isLoading) return <>{tickerValue && <CardSkeletonLoader />}</>;

  return (
    <>
      {tickerValue && (
        <div className="w-full md:w-[450px] flex">
          {isError && (
            /* The `<ErrorComponent error={error} />` is rendering an error component and passing the
            `error` prop to it. This component is displayed when there is an error in fetching the data
            from the `useCompanyInfo` hook. */
            <ErrorComponent error={error} />
          )}
          <Card className=" md:fixed mt-10 w-full md:w-[400px]">
            {!info || isObjectEmpty(info) ? (
              <>
                <CardHeader className="text-red-500">
                  <CardTitle className="text-3xl font-extrabold text-center">
                    {tickerValue} Company Not Found {":("}
                  </CardTitle>
                  <CardDescription className="text-center">
                    Please! try again or search for another company.
                  </CardDescription>
                </CardHeader>
              </>
            ) : (
              <>
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
                    <span className="text-sm font-medium">
                      {info?.Industry}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground border-t py-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-thin">DESCRIPTION</span>
                    </div>
                    {info?.Description}
                  </div>
                </CardHeader>
                <CardFooter className="border-t py-2 w-full flex justify-end">
                  <Link
                    href={`/company/${info?.Symbol}`}
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default CompanyInfo;
