"use client";

import { Card, LineChart, Title } from "@tremor/react";

const chartdata = [
  {
    month: new Date("2023-01-01"),
    "italia": 204,
    "Eko": 3032,
    Trade: 3320,
    Nassau: 3000,
    MontSerrat: 9800,
  },
  {
    month: new Date("2023-02-01"),
    italia: 204,
    Eko: 9800,
    Trade: 9800,
    Nassau: 9800,
    MontSerrat: 3000,
  },
  {
    month: new Date("2023-03-01"),
    italia: 204,
    Eko: 3000,
    Trade: 3212,
    Nassau: 21200,
    MontSerrat: 3099,
  },
  {
    month: new Date("2023-04-01"),
    italia: 204,
    Eko: 3000,
    Trade: 7890,
    Nassau: 7890,
    MontSerrat: 7230,
  },
  {
    month: new Date("2023-05-01"),
    italia: 204,
    Eko: 307650,
    Trade: 3000,
    Nassau: 3000,
    MontSerrat: 3000,
  },
  //...
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const Chart = () => (
  <Card>
    <Title>Export/Import Growth Rates (1970 to 2021)</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="month"
      categories={["italia", "eko"]}
      colors={["emerald", "gray", "indigo", "blue", "lime", "pink", "neutral"]}
      valueFormatter={valueFormatter}
      yAxisWidth={40}
    />
  </Card>
);

export default Chart;

// import dynamic from "next/dynamic";
// import React from "react";
// const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// class MyChart extends React.Component {}

// export function BuildingsLineChart() {
//   const options = {

//     colors: ['#3AA8E0', '#7FE03A', '#D83AE0', '#E0973A', '#89538B', '#C2F3FF', '#E12A1F', '#201FE0', '#201FE0'],
//     dropShadow: { enabled: true },
//     dataLabels: {
//       style: {
//         colors: ["#D2C3DB"],
//       },
//     },
//     markers: {
//       colors: ["#D2C3DB"],
//     },

//     grid: {
//       borderColor: '#D2C3DB',
//       row: {
//         // colors: ["#C2F0C2"], //boddy
//       },
//       column: {
//         // colors: ["#5472E4"], // boddy
//       },
//       chart: {
//         id: "apexchart-example",
//       },
//     },
//     xaxis: {
//       title: {text: 'mes/ano'},
//       categories: [
//         1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
//         2003, 2004, 2005, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
//         2001, 2002, 2003, 2004, 2005,
//       ],
//     },
//   };

//   const series = [
//     {
//       name: "Eko",
//       data: [
//         30, 40, 33, 50, 49, 45, 70, 9100, 125, 50, 54, 49, 29, 1992, 1993, 1994,
//         1995, 1936, 1337, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
//       ],
//     },
//     {
//       name: "Itália",
//       data: [
//         30, 40, 35, 90, 49, 60, 70, 91, 125, 50, 54, 49, 29, 1992, 1993, 1944,
//         1445, 1996, 1447, 998, 999, 2000, 2001, 2011, 2003, 2004, 2005,
//       ],
//     },
//     {
//       name: "Medi",
//       data: [
//         30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 250, 29, 1992, 1993, 1994,
//         1995, 116, 117, 118, 1999, 2000, 2001, 2011, 2003, 2004, 2005,
//       ],
//     },
//     {
//       name: "San",
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
//     },
//     {
//       name: "Trade",
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
//     },
//     {
//       name: "Trade",
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
//     },
//     {
//       name: "Trade",
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
//     },
//     {
//       name: "Trade",
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29],
//     },
//   ];

//   return (
//     <>
//       <ApexChart
//         type="line"
//         options={options}
//         series={series}
//         height="100%"
//         width="100%"
//         className="bg-zinc-400 rounded-2xl"
//       />
//     </>
//   );
// }
