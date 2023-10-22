import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const ErrorComponent = ({ error }: any) => {
  return (
    <Card className="flex flex-col gap-4 p-4 w-full">
      <CardHeader>
        <CardTitle className="text-xl  font-bold text-center underline">
          Error :{")"}
        </CardTitle>
        <CardDescription className=" flex flex-col gap-8">
          <p className="text-sm font-thin  text-red-500">{error?.message}</p>

          <p className="text-xl  font-bold underline">
            Error Condition related to Alphavantage API:
          </p>
          <p className="text-sm font-bold  text-red-500">
            Wait for 1min to get the response for the api :{")"}. <br /> or{" "}
            <br /> If you have you have exceeded the daily request quota for
            your plan. Please Connect to the different network or wifi.
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ErrorComponent;
