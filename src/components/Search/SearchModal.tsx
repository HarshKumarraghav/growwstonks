"use client";

import React, { useCallback, useEffect, useState } from "react";
import { DummySearch } from "@/utils/Dummy/Search";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useStockSearchInfo } from "@/utils/Hooks/useStockSearchInfo";
import { useDebounce } from "@/utils/Hooks/useDebounce";
import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SearchLoader from "../Loader/SearchLoader";
import ErrorComponent from "../Errors/Error";

function SearchModal() {
  const Router = useRouter();
  const [value, setValue] = useState("");
  const [selectFilter, setSelectFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(value, 500);
  const {
    data: searchData,
    isLoading,
    isError,
    error,
  } = useStockSearchInfo(debouncedSearchTerm);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);
  console.log("SearchModal", debouncedSearchTerm);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-96"
          )}
        >
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden p-0 flex-col">
        <div className="flex items-center border-b px-3">
          <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none border-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type a command or search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <div className="flex gap-2 mb-2 flex-col p-3">
            <span className="text-sm font-medium">Filters</span>
            <div className="w-full flex gap-3">
              <Button
                className={`h-8 px-4 py-2  ${
                  selectFilter === "all"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
                onClick={() => setSelectFilter("all")}
              >
                <span>All</span>
              </Button>
              <Button
                className={`h-8 px-4 py-2  ${
                  selectFilter === "stock"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
                onClick={() => setSelectFilter("stock")}
              >
                <span>Stocks</span>
              </Button>
              <Button
                className={`h-8 px-4 py-2  ${
                  selectFilter === "etf"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
                onClick={() => setSelectFilter("etf")}
              >
                <span>ETF</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-scroll p-0 h-[300px]">
          {value.length === 0 ? (
            <></>
          ) : isLoading ? (
            <SearchLoader />
          ) : (
            <div className="flex gap-2 mb-2 flex-col p-3">
              <span className="text-sm font-medium">Search Company</span>
              {searchData
                ?.filter((item) => {
                  if (selectFilter === "all") {
                    return (
                      item["2. name"]
                        .toLowerCase()
                        .includes(debouncedSearchTerm.toLowerCase()) ||
                      item["1. symbol"]
                        .toLowerCase()
                        .includes(debouncedSearchTerm.toLowerCase())
                    );
                  } else if (selectFilter === "stock") {
                    return (
                      (item["2. name"]
                        .toLowerCase()
                        .includes(debouncedSearchTerm.toLowerCase()) &&
                        item["3. type"] === "Equity") ||
                      (item["1. symbol"]
                        .toLowerCase()
                        .includes(debouncedSearchTerm.toLowerCase()) &&
                        item["3. type"] === "Equity")
                    );
                  } else if (selectFilter === "etf") {
                    return (
                      (item["2. name"]
                        .toLowerCase()
                        .includes(debouncedSearchTerm.toLowerCase()) &&
                        item["3. type"] === "ETF") ||
                      (item["1. symbol"]
                        .toLowerCase()
                        .includes(debouncedSearchTerm.toLowerCase()) &&
                        item["3. type"] === "ETF")
                    );
                  }
                })
                .map((item) => {
                  return (
                    <li
                      className="w-full flex justify-between h-10 cursor-pointer hover:bg-secondary rounded-md p-2 items-center"
                      onClick={() => {
                        runCommand(() =>
                          Router.push(`/company/${item["1. symbol"]}`)
                        );
                      }}
                      key={item["1. symbol"] + item["2. name"]}
                    >
                      <TrendingUp className="mr-2 h-4 w-4" />
                      <span>{item["2. name"]}</span>
                    </li>
                  );
                })}
            </div>
          )}
          <div className="flex gap-2 mb-2 flex-col p-3">
            <span className="text-sm font-medium">Top Companies</span>
            <li
              className="w-full flex justify-between h-10 cursor-pointer hover:bg-secondary rounded-md p-2 items-center"
              onClick={() => {
                runCommand(() => Router.push("/company/AAPL"));
              }}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>Apple (AAPL)</span>
            </li>
            <li
              className="w-full flex justify-between h-10 cursor-pointer hover:bg-secondary rounded-md p-2 items-center"
              onClick={() => {
                runCommand(() => Router.push("/company/MSFT"));
              }}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>Microsoft (MSFT)</span>
            </li>
            <li
              className="w-full flex justify-between h-10 cursor-pointer hover:bg-secondary rounded-md p-2 items-center"
              onClick={() => {
                runCommand(() => Router.push("/company/AMZN"));
              }}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>Amazon (AMZN)</span>
            </li>
            <li
              className="w-full flex justify-between h-10 cursor-pointer hover:bg-secondary rounded-md p-2 items-center"
              onClick={() => {
                runCommand(() => Router.push("/company/TSLA"));
              }}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>Tesla (TSLA)</span>
            </li>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchModal;
