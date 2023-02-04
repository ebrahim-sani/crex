import React from "react";
import ChartView from "./ChartView";
import { options } from "../../utils/utils";

// const labels = [
//    "0s",
//    "20s",
//    "40s",
//    "1m",
//    "1.2m",
//    "1.4m",
//    "2m",
//    "2.2m",
//    "2.4m",
//    "3m",
// ];

const rapidOptions: Object = {
   method: "GET",
   headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
   },
};

async function getData() {
   const res = await fetch(
      "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=3m",
      rapidOptions,
   );

   return res.json();
}

export default async function ChartComponent() {
   const fetchedData = await getData();
   const {
      data: { history },
   } = fetchedData;
   // console.log(history.length);

   const lab = (param: string) => {
      const gen_labels = [];
      for (let i = 0; i < history?.length; i++) {
         gen_labels.push((param + (i + 1)).toString());
      }
      const label = gen_labels.splice(0, 40);

      return label;
   };

   // console.log(lab("tm"));

   const dataSets: Object = {
      labels: lab("tm"),
      datasets: [
         {
            label: "Price",
            backgroundColor: "rgba(51, 200, 99, .1)",
            fill: true,
            borderColor: "#33c863",
            tension: 0.2,
            data: history.map(({ price }: any) => parseInt(price)),
         },
      ],
   };

   return <ChartView dataSets={dataSets} options={options} />;
}
