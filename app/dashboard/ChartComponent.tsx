import React, { Suspense } from "react";
import ChartView from "./ChartView";
import { options } from "../../utils/utils";
import Loading from "./loading";
import Error from "./error";

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
   // console.log(history);

   const lab = () => {
      const gen_labels = [];
      for (let i = 0; i < history?.length; i++) {
         gen_labels.push(i + 1).toString();
      }

      return gen_labels;
   };

   // console.log(lab());

   const dataSets: Object = {
      labels: lab(),
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

   return (
      <div className="white-glass p-2 h-[340px] max-[321px]:w-[98.5%] rounded-sm">
         {!history ? (
            <Error message="Something went wrong loading Chart.." />
         ) : (
            <Suspense fallback={<Loading message="Loading chart..." />}>
               <ChartView dataSets={dataSets} options={options} />
            </Suspense>
         )}
      </div>
   );
}
