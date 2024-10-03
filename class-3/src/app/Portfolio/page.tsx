import Header from "../Header"
import Image from "next/image";
import pic from "@/app/pic.jpg"
import Footer from "../Footer";

export default function Portfolio() {
    return(
    <div>
      <Header/>

      <div className="HomeContainer">

        <div className="childContainer">
         <h1>Hy,</h1>
         
         <h2>My Name is Romaisa</h2>
         
         <h2>I am Learning Next Js</h2>
  
          <p> Next.js developer is a front-end or full-stack developer who specializes in building web 
            applications using the Next.js framework. Next.js is a powerful React-based framework that 
            enables developers to create optimized, scalable, and fast web applications with features 
            like server-side rendering (SSR), static site generation (SSG), and client-side rendering 
            (CSR).
          </p>
  
        </div>
  
        <Image 
          id="image"
          src={pic} 
          alt="image"
          height={100} 
          width={300}
        />
        
      </div>

      <Footer/>  

    </div>
  );
}
  