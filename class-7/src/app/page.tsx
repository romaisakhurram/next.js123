"use client"
import { log } from "console";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

// export const dynmaic ="force-dynamic"
export default function Page() {
  // const [counter , Counter] = useState(0)
  // useEffect(() => {
  //   Counter(counter+10)
  // },[])

  // function updateCounter() {
  //  console.log(counter)
  //  Counter(counter+1)
  // }
  // console.log(counter)
  // // let counter = 1
  // // function updateCounter() {
  // //   counter++
  const API_key = ""
 const [data,setdata] = useState<any>(null);

  useEffect(() => {
       fetch("http://api.coinlayer.com/live?access_key=")
       .then((response) => response.json())
       .then(jsonConverted); {

        console.log("jsonConverted");
        
        setdata(jsonConverted)
       };
     },[])
  

  return (

  //   <div>
  //   <p>{counter}</p>
     
  //   <button onClick={() => updateCounter()}>Add Counter</button>
    
  //   </div>
       
  //  ssg aur ssr
  <div>
    BTC:{data.rates?.BTC}

  </div>










  );
}
function jsonConverted(value: any) {
  throw new Error("Function not implemented.");
}

