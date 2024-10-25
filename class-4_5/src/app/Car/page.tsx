import Image from "next/image";
import car from "@/app/components/images/car.jpg"

export default function Car () {
    return (
        <div>
            <Image id="h1"  src={car} alt="api image" />
            <h1 className="Heading">2025 Ford Expendition:Best Full Size in SUV</h1>
            
            <p className="paragraph">An API is a set of rules and protocols that allows different software applications to communicate and interact. In the context of web development, APIs act as a bridge that enables websites or web applications to request and exchange data from external systems, services, or databases.</p>

            <h1 className="h1">How APIs Work:</h1>

            <p className="paragraph">When a website or application makes a request for data, it sends this request through an API to the server where the data is stored. The API then processes this request and returns the requested information in a structured format, typically JSON (JavaScript Object Notation) or XML (eXtensible Markup Language). This entire process happens behind the scenes, enabling smooth communication between different systems without the user being aware.
             For example, when you log in to a website using your Google or Facebook account, the website uses APIs to access your credentials from Google or Facebook, authenticate them, and log you in.
           </p>

    </div>
    )
}