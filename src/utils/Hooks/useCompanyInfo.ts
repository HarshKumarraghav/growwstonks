import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CompanyInfo } from "../../../types/types";

export const useCompanyInfo = (symbol: string) => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_ALPHA_API_KEY;
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"OVERVIEW"}&symbol=${symbol}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["OVERVIEW", symbol],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      if (data.Note) {
        throw new Error(data.Note);
      } else if (data.Information) {
        throw new Error(data.Information);
      }
      return data as CompanyInfo;
    },
    staleTime: 5 * 60 * 1000,
  });
};
