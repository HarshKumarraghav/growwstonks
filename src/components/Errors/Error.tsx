import React from "react";

const ErrorComponent = ({ error }: any) => {
  return (
    <div className="flex flex-col gap-4 bg-secondary p-4 text-red-500 rounded-xl">
      <p className="text-sm font-thin">{error?.message}</p>
      <p className="text-sm font-bold">
        Wait for 5min to get the response for the api :{")"}. <br /> or <br />{" "}
        If you have you have exceeded the daily request quota for your plan.
        Please Connect to the different network or wifi.
      </p>
    </div>
  );
};

export default ErrorComponent;
