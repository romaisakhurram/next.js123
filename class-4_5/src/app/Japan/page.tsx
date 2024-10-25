import Image from "next/image";
import japan from "@/app/components/images/japan.jpg"

export default function  Japan () {
    return (
        <div>
            <Image id="Picture"  src={japan} alt="api image" />
            <h1 className="h1">**Japan Itineraries: 5 Top Routes Of Japan**</h1>
            <p className="paragraph">An API is a set of rules and protocols that allows different software applications to communicate and interact. In the context of web development, APIs act as a bridge that enables websites or web applications to request and exchange data from external systems, services, or databases.</p>
        </div>
    )
}