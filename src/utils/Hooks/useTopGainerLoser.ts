import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GainerLoserObject } from "../../../types/types";

export const useTopGainerLoser = () => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_ALPHA_API_KEY;
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"TOP_GAINERS_LOSERS"}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["gainer_looser", URL],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      if (data.Note) {
        throw new Error(data.Note);
      } else if (data.Information) {
        throw new Error(data.Information);
      }
      return data as GainerLoserObject;
    },
  });
};
