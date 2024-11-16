import Image from "next/image"
import Link from "next/link"
import agency from "@/app/components/images/agency.jpg"
import buisness from "@/app/components/images/buisness.jpg"
import car from "@/app/components/images/car.jpg"

export default function Blog () {
    return(
        <div className="BlogsContainer bounce-in-right">

        <h1 className="Heading">Blogs</h1>

        <div className="childContainer">

        <div className="imageConatiner">
         <Image src={agency} alt="image"/>
        </div> 
        <h2 className="title">Top 19 US agency in powerhouses</h2> 
        <p className="description">Unveiling the Best: Top 19 Us Travel Agency Powerhouses The US travel agency sector is boomong. It offers many services...</p>
        <button className="button"><Link href="/Agency">Read More</Link></button>
        </div>

        <div className="childContainer">

        <div className="imageConatiner">
         <Image src={buisness} alt="image"/>
        </div> 
        <h2 className="title">How To Make Money Online For Beginners</h2> 
        <p className="description">How to Make Money Online For Beginners: 7 Ways To Make Money Online How To Make Money Online For Beginners?...</p>
        <button className="button"><Link href="/Buisness">Read More</Link></button>
        </div>

        <div className="childContainer">
        <div className="imageConatiner">
         <Image src={car} alt="image"/>
        </div> 
        <h2 className="title">Top 19 US agency in powerhouses</h2> 
        <p className="description">How to Make Money Online For Beginners: 7 Ways To Make Money Online How To Make Money Online For Beginners?...</p>
        <button className="button"><Link href="/Car">Read More</Link></button>
        </div>

        <div className="buttonContainer">
         <button className="LoadButton"><Link href="/Blog">Load More</Link></button>
        </div>

      </div>
    )
}