import Link from "next/link";
import Image from "next/image";
import logo from "@/app/Images/logo.png"

export default function Header(){
    return (
        <div className="Header">
            <ul className="Header-Button"> 
                <li className="logoImage"><Image src={logo} alt="logo image" /><figcaption>Digital Project</figcaption></li>
                <Link href="/"><hr /><li>MAIN</li><hr /></Link>
                <Link href="/GALLERY"><li>GALLERY</li></Link>
                <Link href="/PROJECTS"><li>PROJECTS</li></Link>
                <Link href="/CERTIFICATION"><li>CERTIFICATION</li></Link>
                <Link href="/CONTACT"><li>CONTACT</li></Link>

            </ul>
        </div>
    )
}