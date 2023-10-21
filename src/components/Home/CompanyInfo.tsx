import React from "react";
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { DummyCompany } from "@/utils/Dummy/Company";
import { Button } from "../ui/button";
const CompanyInfo = () => {
  return (
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
            {DummyCompany.Name}
            <span className="text-[12px]">{`(${DummyCompany.Symbol})`}</span>
          </span>
          <span className="text-sm font-medium">{DummyCompany.Country}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-thin">SECTOR</span>
          <span className="text-sm font-thin">INDUSTRY</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{DummyCompany.Sector}</span>
          <span className="text-sm font-medium">{DummyCompany.Industry}</span>
        </div>
        <CardDescription className="border-t py-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-thin">DESCRIPTION</span>
          </div>
          {DummyCompany.Description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-t py-2 w-full flex justify-end">
        <Button variant={"outline"}>Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default CompanyInfo;
