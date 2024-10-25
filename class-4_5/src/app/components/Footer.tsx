import Link from "next/link";
import linkedin from "@/app/components/images/linkedin.png"
import github from "@/app/components/images/github.png"
import facebook from "@/app/components/images/facebook.png"
import Image from "next/image"

export default function Footer () {
    return (
        <div className="Footer">
             
            <ul className="Footer-Button">
                <li><Link href="https://linkedin.com/in/romaisa-khurram123"><Image src={linkedin} alt="image" width={30} height={30}/></Link></li>
                <li><Link href="https://github.com"><Image src={github} alt="image" width={30} height={30} /></Link></li>
                <li><Link href="https://facebook.com/romaisa-khurram"><Image src={facebook} alt="image" width={30} height={30} /></Link></li>
            </ul>

            <ul className="Footer-Product">
                <ul>Product</ul>
                <li>Automated Chatbot</li>
                <li>Data Security</li>
                <li>Virtual Reality</li>
                <li>Communication</li>
                <li>Support</li>
            </ul>

            <ul className="Footer-Services">
                <ul>Services</ul>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>FAQ;s</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>

            <ul className="Footer-Company">
                <ul>Company</ul>
                <li>About Us</li>
                <li>Features</li>
                <li>Our Pricing</li>
                <li>Services</li>
                <li>Latest News</li>
            </ul>

        </div>
    );
}