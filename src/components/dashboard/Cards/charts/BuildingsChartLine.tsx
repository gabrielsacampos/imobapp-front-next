'use client'

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function BuildingsLineChart(){

    const option = {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005]
        }
      }

    const series = [{
        name: 'Eko',
        data: [30, 40, 33, 50, 49, 45, 70, 9100, 125, 50, 54, 49, 29,1992, 1993, 1994, 1995, 1936, 1337, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005]
      },
      {
        name: 'Itália',
        data: [30, 40, 35, 90, 49, 60, 70, 91, 125, 50, 54, 49, 29, 1992, 1993, 1944, 1445, 1996, 1447, 998, 999, 2000, 2001, 2011, 2003, 2004, 2005]
      },
      {
        name: 'Medi',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 250, 29, 1992, 1993, 1994, 1995, 116, 117, 118, 1999, 2000, 2001, 2011, 2003, 2004, 2005]
      },
      {
        name: 'San',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29]
      },
      {
        name: 'Trade',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 50, 54, 49, 29]
      }]

    return(
        <>
            <ApexChart type="line" options={option} series={series} height="100%" width="100%" />
        </>
    )
    
}