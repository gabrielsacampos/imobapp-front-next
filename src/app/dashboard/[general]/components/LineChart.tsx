"use client";

import { Card, LineChart, Title } from "@tremor/react";

const chartdata = [
  {
    month: "01/2023",
    "Eko Home Club": 14103,
    Itália: 6421,
    Mediterrannee: 2300,
    "Residencial Maurício de Nassau": 3600,
    "River Place": 4015,
    "Trade Center": 4781,
  },
  {
    month: "02/2023",
    Comercial: 116918,
    "Eko Home Club": 61137,
    Itália: 10874,
    Mediterrannee: 5839,
    "Mont Serrat": 16543,
    "Residencial Maurício de Nassau": 26699,
    "River Place": 4722,
    "San Marino": 2550,
    "Trade Center": 48620,
  },
  {
    month: "03/2023",
    Comercial: 133763,
    "Eko Home Club": 82634,
    Itália: 10914,
    Mediterrannee: 6867,
    "Mont Serrat": 19693,
    "Residencial Maurício de Nassau": 31222,
    "River Place": 13695,
    "San Marino": 2549,
    "Trade Center": 51361,
  },
  {
    month: "04/2023",
    Comercial: 125937,
    "Eko Home Club": 65834,
    Itália: 9078,
    Mediterrannee: 7336,
    "Mont Serrat": 17993,
    "Residencial Maurício de Nassau": 25618,
    "River Place": 19069,
    "San Marino": 2520,
    "Trade Center": 49404,
  },
  {
    month: "05/2023",
    Comercial: 123894,
    "Eko Home Club": 87912,
    Itália: 12679,
    Mediterrannee: 7073,
    "Mont Serrat": 18007,
    "Residencial Maurício de Nassau": 30128,
    "River Place": 28794,
    "San Marino": 2520,
    "Trade Center": 57228,
  },
  {
    month: "06/2023",
    Comercial: 123095,
    "Eko Home Club": 69093,
    Itália: 9077,
    Mediterrannee: 7092,
    "Mont Serrat": 19363,
    "Residencial Maurício de Nassau": 27532,
    "River Place": 6041,
    "San Marino": 1620,
    "Trade Center": 44376,
  },
  {
    month: "07/2023",
    Comercial: 139391,
    "Eko Home Club": 77745,
    Itália: 12640,
    Mediterrannee: 5920,
    "Mont Serrat": 14081,
    "Residencial Maurício de Nassau": 29716,
    "River Place": 7692,
    "San Marino": 1920,
    "Trade Center": 50380,
  },
  {
    month: "08/2023",
    Comercial: 110309,
    "Eko Home Club": 76670,
    Itália: 10879,
    Mediterrannee: 7367,
    "Mont Serrat": 18156,
    "Residencial Maurício de Nassau": 31844,
    "River Place": 3800,
    "San Marino": 1920,
    "Trade Center": 52434,
  },
  {
    month: "09/2023",
    Comercial: 120340,
    "Eko Home Club": 69193,
    Itália: 9047,
    Mediterrannee: 6001,
    "Mont Serrat": 29639,
    "Residencial Maurício de Nassau": 28985,
    "River Place": 4000,
    "San Marino": 1292,
    "Trade Center": 47799,
  },
  {
    month: "10/2023",
    Comercial: 122643,
    "Eko Home Club": 87989,
    Itália: 12921,
    Mediterrannee: 8725,
    "Mont Serrat": 16854,
    "Residencial Maurício de Nassau": 31896,
    "River Place": 17892,
    "San Marino": 2039,
    "Trade Center": 52666,
  },
  {
    month: "11/2023",
    Comercial: 108053,
    "Eko Home Club": 75676,
    Itália: 11649,
    Mediterrannee: 4960,
    "Mont Serrat": 16852,
    "Residencial Maurício de Nassau": 30532,
    "River Place": 7695,
    "San Marino": 2020,
    "Trade Center": 57394,
  },
];

const valueFormatter = (number: number) => {
  if (number < 1000) {
      return number.toString(); 
  } else {
      return (number / 1000).toFixed(0) + 'k';
  }
}
  

const BuildingsLineChart = () => (
  <Card className="my-6 w-full">
    <Title>Recebimento por Empreendimento</Title>
    <LineChart
      className="p-0 object-contain"
      data={chartdata}
      index="month"
      categories={[
        "Comercial",
        "Eko Home Club",
        "Itália",
        "Mediterrannee",
        "Residencial Maurício de Nassau",
        "River Place",
        "Trade Center",
        "Mont Serrat",
        "San Marino",
      ]}
      colors={[
        "slate",
        "stone",
        "red",
        "orange",
        "amber",
        "blue",
        "green",
        "teal",
        "cyan",
        "sky",
        "yellow",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ]}
      valueFormatter={valueFormatter}
      yAxisWidth={40}
    />
  </Card>
);

export default BuildingsLineChart;
