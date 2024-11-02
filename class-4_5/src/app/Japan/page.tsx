import Image from "next/image";
import japan from "@/app/components/images/japan.jpg"

export default function  Japan () {
    return (
        <div>
            <Image id="Picture"  src={japan} alt="api image" />

            <h1 className="h1">**Japan Itineraries: 5 Top Routes Of Japan**</h1>
            
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic tempore saepe repellat officiis ratione, neque pariatur non officia vitae corporis. Accusamus labore impedit doloribus. Officiis quae excepturi sint dignissimos quibusdam?</p>
        
        </div>
    )
}