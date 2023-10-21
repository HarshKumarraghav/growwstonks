import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCompanyInfo = (symbol: string) => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_ALPHA_API_KEY;
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"OVERVIEW"}&symbol=${symbol}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["OVERVIEW", symbol],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data;
    },
  });
};
