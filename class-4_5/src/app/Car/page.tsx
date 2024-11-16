import Image from "next/image";
import car from "@/app/components/images/car.jpg"

export default function Car () {
    return (
        <div>
            <Image id="Picture"  src={car} alt="api image" />
            <h1 className="h1">2025 Ford Expendition:Best Full Size in SUV</h1>
            
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non doloremque exercitationem, distinctio quo in itaque quasi illo at tempore assumenda blanditiis veniam! Repellendus saepe molestias natus nesciunt qui debitis illo!</p>

    </div>
    )
}