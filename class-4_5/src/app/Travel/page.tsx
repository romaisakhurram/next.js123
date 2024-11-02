import Image from "next/image";
import travel from "@/app/components/images/travel.jpg"

export default function Travel () {
    return (
        <div>
            
            <Image id="Picture"  src={travel} alt="api image" />
            
            <h1 className="h1">How To Travel The World? Best Guide</h1>
            
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit, nemo debitis nihil ratione necessitatibus modi adipisci error quis harum fugiat consectetur laboriosam porro accusantium quibusdam soluta blanditiis. Mollitia, sit!</p>
        
        </div>
    )
}