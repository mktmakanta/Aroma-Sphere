import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../components/ui/card";

const Loader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <Card className="w-full max-w-xs mx-auto">
        <CardHeader>
          <Skeleton className="w-full h-56 object-cover rounded-md" />
        </CardHeader>

        <CardContent className="p-4">
          <Skeleton className="text-lg font-semibold"></Skeleton>
          <CardDescription className="text-sm text-gray-600 mt-2"></CardDescription>
        </CardContent>
        <CardFooter className=" flex flex-col items-start">
          <div className="flex gap-2 items-center p-0 ">
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="text-xl py-2 font-semibold">
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Loader;
