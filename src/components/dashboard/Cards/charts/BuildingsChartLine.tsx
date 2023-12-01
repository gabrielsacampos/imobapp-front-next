"use client";

import dynamic from "next/dynamic";
import React from "react";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

class MyChart extends React.Component {}

export function BuildingsLineChart() {
  const options = { 
    
    colors: ['#3AA8E0', '#7FE03A', '#D83AE0', '#E0973A', '#89538B', '#C2F3FF', '#E12A1F', '#201FE0', '#201FE0'],
    dropShadow: { enabled: true },
    dataLabels: {
      style: {
        colors: ["#D2C3DB"],
      },
    },
    markers: { 
      colors: ["#D2C3DB"],
    },

    grid: {
      borderColor: '#D2C3DB',
      row: {
        // colors: ["#C2F0C2"], //boddy
      },
      column: {
        // colors: ["#5472E4"], // boddy
      },
      chart: {
        id: "apexchart-example",
      },
    },
    xaxis: {
      title: {text: 'mes/ano'},
      categories: [
        1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
        2003, 2004, 2005, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
        2001, 2002, 2003, 2004, 2005,
      ],
    },
  };

  const series = [
    {
      name: "Eko",
      data: [
        30, 40, 33, 50, 49, 45, 70, 9100, 125, 50, 54, 49, 29, 1992, 1993, 1994,
        1995, 1936, 1337, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
      ],
    },
    {
      name: "Itália",
      data: [
        30, 40, 35, 90, 49, 60, 70, 91, 125, 50, 54, 49, 29, 1992, 1993, 1944,
        1445, 1996, 1447, 998, 999, 2000, 2001, 2011, 2003, 2004, 2005,
      ],
    },
    {
      name: "Medi",
      data: [
        30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 250, 29, 1992, 1993, 1994,
        1995, 116, 117, 118, 1999, 2000, 2001, 2011, 2003, 2004, 2005,
      ],
    },
    {
      name: "San",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
    },
    {
      name: "Trade",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
    },
    {
      name: "Trade",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
    },
    {
      name: "Trade",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
    },
    {
      name: "Trade",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
    },
  ];

  return (
    <>
      <ApexChart
        type="line"
        options={options}
        series={series}
        height="100%"
        width="100%"
        className="bg-zinc-400 rounded-2xl"
      />
    </>
  );
}
