import Image from "next/image";
import picture1 from "@/app/components/images/picture1.webp"
import picture2 from "@/app/components/images/picture2.webp"
import picture3 from "@/app/components/images/picture3.webp"
import Link from "next/link";
import style from "@/app/Responsive/page.module.css"


export default function Responsive() {
  return (
     <div className={style.parentContainer}>
      <div className={style.childContainer}>
        <div className={style.imageContainer}>
         <Image src={picture1} alt="pic1"/>
        </div>
        <h1 className={style.title}> AI Generative</h1>
        <p className={style.description}>
        The visual includes a futuristic glowing AI brain,
        code, and abstract data streams. Let me know if you'd like any adjustments or further details!
        </p>
        <button className={style.button}><Link href="/AI">Read More</Link></button>
      </div>

      <div className={style.childContainer}>
        <div className={style.imageContainer}>
         <Image src={picture2} alt="pic2"/>
        </div>
        <h1 className={style.title}>Block Chain</h1>
        <p className={style.description}>
        The visual includes a digital chain of interconnected blocks, glowing lines and nodes, smart contracts,
        and secure locks, all set against a backdrop of abstract data streams and holographic web pages.
        </p>
        <button className={style.button}><Link href="/BlockChain">Read More</Link></button>
      </div>

      <div className={style.childContainer}>
        <div className={style.imageContainer}>
         <Image src={picture3} alt="pic3"/>
        </div>
        <h1 className={style.title}> API</h1>
        <p className={style.description}>
        API usage in web development. It shows interconnected devices exchanging data, along with symbols for API requests, cloud storage,
        and integrations like maps and social media. Let me know if you'd like any adjustments!
        </p>
        <button className={style.button}><Link href="/API">Read More</Link></button>
      </div>
        
    </div>

  );
}
