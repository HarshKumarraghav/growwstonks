"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import React from "react";

const TabContainer = () => {
  const { data } = useTopGainerLoser();
  console.log("data", data);

  return <div>TabContainer</div>;
};

export default TabContainer;
