import { ChartData, StockData } from "../../../types/types";

export const StockChartDataFormat = (
  stockData: StockData,
  objectKey: string
) => {
  const formattedData: ChartData[] = [];

  if (stockData[objectKey]) {
    Object.entries(stockData[objectKey]).forEach(([key, value]) => {
      if (typeof value === "object") {
        formattedData.push({
          x: key,
          y: [
            parseFloat(value["1. open"]),
            parseFloat(value["2. high"]),
            parseFloat(value["3. low"]),
            parseFloat(value["4. close"]),
          ],
        });
      }
    });
  }
  return formattedData;
};
