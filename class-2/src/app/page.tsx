import Image from "next/image";
import profilePicture from "@/app/components/profile.jpg"
import Header from "@/app/components/header";
import Footer from "./components/footer";

export default function Home() {
  return(
    <div>

      <Header/>

      <div className="HomeContainer">

        <div className="childContainer">
          <h1> Hy, </h1>

          <h3> My Name is Romaisa </h3> 
          
          <h3>I am Next Js Developer</h3>
          
          <p>Creating high-performance web applications and maintaining them. 
            Designing server-side rendered React applications and implementing optimized 
            client-side rendering.</p>
        
        </div>

        <Image src={profilePicture} alt="profilePicture" width={300} height={350} id="picture"/>
      
      </div>

      <Footer/>

    </div>
  
  );
}
