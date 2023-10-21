import { create } from "zustand";

interface useProModalState {
  tickerValue: string;
  setTickerValue: (tickerValue: string) => void;
}

export const useDataStore = create<useProModalState>((set) => ({
  tickerValue: "",
  setTickerValue: (tickerValue: string) => set({ tickerValue }),
}));
