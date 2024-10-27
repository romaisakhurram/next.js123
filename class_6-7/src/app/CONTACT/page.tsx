import style from "@/app/CONTACT/page.module.css"
import Image from "next/image"
import  image14 from "@/app/Images/image 14.png"

export default function Contact () {
    return (
        <div className={style.ContactContainer}>
            
            <div className={style.childContainer}>

             <h1 className={style.h1}>Contact</h1>
             <h2 className={style.h2}>Information</h2>

             <h3 className={style.h3}>Company Name </h3>
             <p className={style.description}> 1234 Sample Street Austin Texas 76401</p>
            
             <h3 className={style.h3}>512.333.2222</h3>
             <p className={style.description}>sampleemail@gmail.com</p>
             
             <button className={style.button}>CONTACT US</button>
            
            </div>

            <div className="ImageContainer">
            <Image src={image14} alt="image" />
            </div>


        </div>
        
    )
}