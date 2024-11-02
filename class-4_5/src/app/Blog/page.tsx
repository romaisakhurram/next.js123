import Image, { StaticImageData } from "next/image";
import style from "@/app/Blog/page.module.css"
import Link from "next/link";
import agency from "@/app/components/images/agency.jpg"
import buisness from "@/app/components/images/buisness.jpg"
import car from "@/app/components/images/car.jpg"
import football from "@/app/components/images/football.jpg"
import japan from "@/app/components/images/japan.jpg"
import travel from "@/app/components/images/travel.jpg"


type Idata = {
   title : string
   description : string
   Image: StaticImageData
   link:string
}

const data : Idata[] = [
  {
    title: "Top 19 US agency in powerhouses", 
    description:"Unveiling the Best: Top 19 Us Travel Agency Powerhouses The US travel agency sector is boomong. It offers many services..." , 
    Image: agency , 
    link: "/Agency"
  },

  {
    title: "How To Make Money Online For Beginners" , 
    description: "How to Make Money Online For Beginners: 7 Ways To Make Money Online How To Make Money Online For Beginners?..." ,
    Image: buisness ,
    link: "/Buisness"
  }, 

  {
    title: "2025 Ford Expendition:Best Full Size in SUV " ,
    description: "2025 Ford Expedition: A fresh Take on the Full-Size SUV Ford'slargest Suvhas been under major overhaul. It now..." ,
    Image: car , 
     link: "/Car"
  },

  {
    title: "Liverpool FC" , 
    description: "Liverpool FC is an expert football club based in liverpool,England.The club completes in the leading League...",  
    Image: football , 
     link: "/Football"
  },

  {
    title: "Japan Itineraries: 5 Top Routes Of Japan" , 
    description: "Japan itineraries: 5 top routes to discover the country .Japan offers a welath of experiences.Its modern cities historic landmarks..." , 
    Image: japan , 
    link :"/Japan"
  },

  {
    title: "How To Travel The World? Best Guide" , 
    description: "How to travel the world: here everything you need to travel the world how to travel the world Planning a..." , 
    Image: travel , 
    link: "/Travel"
  }
]

export default function Blog() {
  return (
     <div className={style.parentContainer}>
      <h1 className={style.Heading}>Blogs</h1>
      {data.map ((Idata) =>(
      <div className={style.childContainer}>
        <div className={style.imageContainer}>
         <Image src={Idata.Image} alt={Idata.title} />
        </div>
        <h2 className={style.title}>{Idata.title}</h2>
        <p className={style.description}>{Idata.description}</p>
        <button className={style.button}><Link href={Idata.link}>Read More</Link></button>

      </div>
      ))}

    </div>

  );
}
