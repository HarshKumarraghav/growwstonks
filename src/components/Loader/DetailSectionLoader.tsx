import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardDescription, CardHeader } from "../ui/card";

const DetailSectionLoader = () => {
  return (
    <div className="w-full flex">
      <Card className=" mt-10  w-full">
        <CardHeader>
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="w-1/5 h-4" />

            <Skeleton className="w-1/5 h-4" />
          </div>
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="w-1/5 h-4" />

            <Skeleton className="w-1/5 h-4" />
          </div>
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="w-1/5 h-4" />
            <Skeleton className="w-1/5 h-4" />
          </div>
          <div className="flex justify-between items-center gap-2">
            <Skeleton className="w-2/5 h-4" />
            <Skeleton className="w-1/5 h-4" />
          </div>
          <div className="flex justify-start items-center flex-wrap pt-4 gap-4">
            <div className="flex justify-between items-center gap-2">
              <Skeleton className="w-1/5 h-4" />
            </div>
            <Skeleton className="w-full h-4 mt-2" />
            <Skeleton className="w-full h-4 mt-2" />
            <Skeleton className="w-full h-4 mt-2" />
            <Skeleton className="w-full h-4 mt-2" />
            <Skeleton className="w-full h-4 mt-2" />
            <Skeleton className="w-full h-4 mt-2" />
            <Skeleton className="w-full h-4 mt-2" />
            <Skeleton className="w-full h-4 mt-2" />
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  className="flex-col w-32 h-32 flex justify-center p-3 gap-4"
                  key={index}
                >
                  <Skeleton className="w-2/5 h-4" />
                  <Skeleton className="w-4/5 h-4" />
                </div>
              ))}
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DetailSectionLoader;
