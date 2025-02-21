import style from "@/app/SampleProject1/page.module.css"
import image33 from "@/app/Images/image 33 (1).png"
import image34 from "@/app/Images/image 34 (1).png"
import image35 from "@/app/Images/image 35.png"
import  Image  from "next/image"


export default function SampleProject () {
    return (
         <div className={style.SampleProjectContainer}>
              <h1 className={style.h1}>Sample Project 1</h1>
              <div className={style.Image1}>
                <Image src={image33} alt="image" width={1170} height={435}/>
              </div>
              <br />
              <div className={style.Image2}>
                <Image src={image34} alt="image" width={450} height={200}/>
                <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p>
              </div>
              <br />
              <div className={style.Image3}>
                <Image src={image35} alt="image" width={1170} height={435}/>
              </div>
         </div>
    )
}