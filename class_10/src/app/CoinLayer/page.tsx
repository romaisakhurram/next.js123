"use client"
import {useState , useEffect} from "react";


export default function CoinLayer() {

        const  API_Key ="72953684b78bd31c5daa54e0d3c636d8";
        const  [data , setData] = useState<any>(null);

        useEffect (() => {
            fetch (`https://api.coinlayer.com/live?access_key=${API_Key}`)
            .then((response) => response.json())
            .then((jsonConverted) => {
                console.log("JSON Converted Data : " , jsonConverted);
                setData(jsonConverted);
            })
        } ,[] )
    return( 
        <div className="CoinMarket">
            <h1 className="Heading">Crypto Currency Coin</h1>
            <hr />
            
            <br />
            BTC : {data?.rates.BTC}
            <hr />

            <br />
            BNB : {data?.rates.BNB}
            <hr />

            <br />
            ACP : {data?.rates.ACP}
            <hr />

            <br />
            BASH : {data?.rates.BASH}
            <hr />

            <br />
            AGI : {data?.rates.AGI}
            <hr />

            <br />
            BCD : {data?.rates.BCD}
            <hr />

            <br />
            BAT : {data?.rates.BAT}
            <hr />

        </div>
    );
}
