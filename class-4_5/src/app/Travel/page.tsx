import Image from "next/image";
import travel from "@/app/components/images/travel.jpg"

export default function Travel () {
    return (
        <div>
            
            <Image id="Picture"  src={travel} alt="api image" />
            
            <h1 className="h1">How To Travel The World? Best Guide</h1>
            
            <p className="paragraph">An API is a set of rules and protocols that allows different software applications to communicate and interact. In the context of web development, APIs act as a bridge that enables websites or web applications to request and exchange data from external systems, services, or databases.</p>
        
        </div>
    )
}