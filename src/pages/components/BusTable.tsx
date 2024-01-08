import React, { useState, useEffect } from "react";
import { BusLine } from "./BusLine";
import "./BusTable.css";

interface BusStopInfo {
  stopPointNumber: number;
  name: string;
}

interface BusInfo {
  line: number;
  stops: BusStopInfo[];
  amountOfStops: number;
}

interface ListOfBusInfo {
  buses: BusInfo[];
}

export const BusTable = () => {
  const [busLineData, setBusLineData] = useState<ListOfBusInfo>();

  const fetchData = async () => {
    return await fetch("http://localhost:8080/app/v1/busdata")
      .then((response) => response.json())
      .then((data) => setBusLineData(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="BusTable">
      <h1 className="BusTable_header">Top 10 Bus lines with most stops</h1>
      <div className="BusTable_container">
        {busLineData?.buses.map((busLine) => {
          return <BusLine busLine={busLine} />;
        })}
      </div>
    </div>
  );
};
