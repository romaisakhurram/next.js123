import Footer from "../Footer"
import Header from "../Header"
import image3 from "@/app/image3.png"
import Image from "next/image"

export default function About (){
    return (
        <div className="About">
         <Header/>
         <Image
         src={image3}
         alt="image"
         height={100}
         width={1350}
         />
         <Footer/>
        </div>
    )
}