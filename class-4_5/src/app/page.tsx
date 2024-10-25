
import profilePic from "@/app/components/images/profilePic.png"
import Image from "next/image"
import Link from "next/link"

export default function Home (){
  return(
    <div className="Home bounce-in-right">
      <div className="Children bounce-in-right">
        <h1 className="h1">Future Web Developer </h1>
        <p className="description">A web developer makes and maintains websites. They are in charge of a
          site's overall look and feel. Web developers also handle the technical aspects of a
          website, including its performance (website speed) and capacity (the maximum amount of
          traffic the site could handle at a given time). 
        </p> 
        
        <button className="Button"> <Link href="/About-Us">Read More </Link></button>
  
      </div>

      <div className="Image">
       <Image  src={profilePic} alt="profile pic" />
      </div>

    </div>
  ) 
}