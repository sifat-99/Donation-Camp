import { useEffect, useState } from "react";
import Piechart from "./Piechart";


const PIchart = () => {

  const [data, setData] = useState([]);
  const datas = localStorage?.getItem('donation')||"[]";
  const dataParse = JSON.parse(datas);
  let donationAmount = 0;
  dataParse.forEach( ()=> {
    donationAmount += 1;
    
  }
  );
  useEffect(() => {
    fetch('/resources.json')
    .then(res => res.json())
    .then(data => setData(data))
  }
  , [])

let totalAmount = 0;

  data.forEach( () => {
    totalAmount += 1;
    
  }
  );
// console.log(totalAmount);
  return (
    <div className="flex justify-center items-center">
        <Piechart 
        totalAmount={totalAmount}
        donationAmount={donationAmount}
        ></Piechart>
    </div>
  );
};

export default PIchart;