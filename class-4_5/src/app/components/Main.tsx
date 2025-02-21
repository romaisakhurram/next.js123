import profilePic from "@/app/components/images/profilePic.png"
import Image from "next/image"

export default function  Main() {
    return (
        
      <div className="Children">

      <div className="GrandChild">

       <h1 className="h1 tracking-in-expand-fwd ">Blog Website 
       </h1>
       <p className="description tracking-in-expand-fwd ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi eaque amet corrupti cumque vero exercitationem ipsum impedit consequuntur ullam, placeat, neque ut distinctio eligendi dolorum ducimus maxime quas perspiciatis?</p> 

      </div>

      <div className="Image bounce-in-right">
       <Image  src={profilePic} alt="profile pic" width={1500} height={400} />
      </div>

      </div>
    )
}