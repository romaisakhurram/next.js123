import style from "@/app/GALLERY/page.module.css"
import Image from "next/image"
import Rectangle22 from "@/app/Images/Rectangle 22.png"
import Rectangle23 from "@/app/Images/Rectangle 23.png"
import Rectangle24 from "@/app/Images/Rectangle 24.png"
import Rectangle25 from "@/app/Images/Rectangle 25.png"
import Rectangle26 from "@/app/Images/Rectangle 26.png"
import Rectangle27 from "@/app/Images/Rectangle 27.png"
import Rectangle28 from "@/app/Images/Rectangle 28.png"
import Rectangle29 from "@/app/Images/Rectangle 29.png"


export default function Gallery () {
    return (
       <div className={style.GalleryContainer}>
        <div>
         <h1 className={style.h1}>Photo</h1>
         <h2 className={style.h2}>Gallery</h2>
        </div>
        <div className={style.imageContainer}>
            <ul>
            <li><Image src={Rectangle22} alt="image" /></li><br /> <br />
            <li><Image src={Rectangle23} alt="image" /></li>
            </ul>
            <ul>
            <li><Image src={Rectangle24} alt="image" /></li><br /> <br />
            <li><Image src={Rectangle25} alt="image" /></li>
            </ul>
            <ul>
            <Image src={Rectangle26} alt="image" /> <br /> <br />
            <Image src={Rectangle27} alt="image" />
            </ul>
            <ul>
            <Image src={Rectangle28} alt="image" /> <br /> <br />
            <Image src={Rectangle29} alt="image" />
            </ul>
        </div>
       </div>
    )
}