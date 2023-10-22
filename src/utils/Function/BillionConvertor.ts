export const formatMarketCap = (marketCap: number) => {
  if (marketCap >= 1e9) {
    // Convert to billion format
    return `$${(marketCap / 1e9).toFixed(1)}B`;
  } else {
    // Default format
    return `$${marketCap}`;
  }
};
