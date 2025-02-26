import style from "@/app/PROJECTS/page.module.css"
import Image from "next/image" 
import image30 from "@/app/Images/image 30.png"
import image32 from "@/app/Images/image 32.png"
import image34 from "@/app/Images/image 34.png"
import Link from "next/link"

export default function Projects () {
    return (
       <div className={style.ProjectContainer}>
           <div>
             <h1 className={style.h1}>Our</h1>
             <h2 className={style.h2}>Projects</h2>
            </div>

            <div className={style.childContainer}>
             <Image src={image30} alt="image" width={670} height={445}/>
             <div>
             <h1 className={style.title}>Sample Project 1 </h1>
             <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
             <button className="Button"><Link href="/SampleProject1">VIEW MORE</Link></button>
             </div>
            </div>
            <br /> <br />

            <div className={style.childContainer}>
             <Image src={image32} alt="image" width={670} height={445}/>
             <div>
             <h1 className={style.title}>Sample Project 2 </h1>
              <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
              <button className="Button"><Link href="/SampleProject2">VIEW MORE</Link></button>
              </div>
            </div>
            <br /> <br />

            <div className={style.childContainer}> 
             <Image src={image34} alt="image" width={670} height={445}/>
             <div>
             <h1 className={style.title}>Sample Project 3 </h1>
              <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
              <button className="Button"><Link href="/SampleProject3">VIEW MORE</Link></button>
              </div>
            </div>
            <br /> <br />

        </div>
    )
}