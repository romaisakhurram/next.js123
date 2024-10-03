import Footer from "../Footer"
import Header from "../Header"
import Image from "next/image"
import image5 from "@/app/image5.png"

export default function Contact (){
    return (
        <div className="Contact">
        <Header/>
        <Image
        src={image5}
        alt="image5"
        height={100}
        width={1350}
        />
        <Footer/>
        </div>
    )
}