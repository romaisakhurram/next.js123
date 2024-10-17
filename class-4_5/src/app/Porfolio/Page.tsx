import profilePicture from "@/app/components/images/profile.jpg"
import Image from "next/image"
import Link from "next/link"


export default function Portfolio () {
    return(
        <div className="Home bounce-in-right">
      <div className="Children bounce-in-right">
      <h1 className="h1"> Hy, </h1>

      <h3 className="h3">A web developer makes and maintains websites. They are in charge of a
         site's overall look and feel. Web developers also handle the technical aspects of a
         website, including its performance (website speed) and capacity (the maximum amount of
         traffic the site could handle at a given time). </h3> 


      <button className="Button"> <Link href="/About-Us">Read More </Link></button>
    
      </div>

      <Image  id="Image" src={profilePicture} alt="profilePicture" width={300} height={350} />
      </div>
    )
}