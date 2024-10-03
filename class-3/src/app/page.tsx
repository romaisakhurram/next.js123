import Header from "./Header"
import Image from "next/image";
import Footer from "./Footer";
import image2 from "@/app/image2.png"


export default function Home() {
  return (
  <div className="Home">
    <Header/>  
    <Image
    src={image2}
    alt="image2"
    height={200}
    width={1350}
    />
    <Footer/>
  </div>
  );
}
