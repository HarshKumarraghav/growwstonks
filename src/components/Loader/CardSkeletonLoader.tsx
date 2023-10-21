import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CardSkeletonLoader = () => {
  return (
    <div className="w-[450px] hidden sm:flex h-[350px]">
      <Card className="fixed mt-10  w-[450px]">
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
          <div className="text-sm text-muted-foreground border-t py-2">
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
          </div>
        </CardHeader>
        <CardFooter className="border-t py-2 w-full flex justify-end">
          <Skeleton className="w-1/5 h-4" />
          <Skeleton className="w-1/5 h-4" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardSkeletonLoader;
