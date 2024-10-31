import Image from "next/image"
import logo2 from "@/app/Images/logo2.png"
import location from "@/app/Images/location.png"
import phone from "@/app/Images/phone.png"
import message from "@/app/Images/message.png"
import facebook from "@/app/Images/facebook.png"
import twitter from "@/app/Images/twitter.png"
import linkedin from  "@/app/Images/Linked In.png"
import shape from "@/app/Images/Shape.png"
import Link from "next/link"


export default function Footer () {
    return (
        <div className="Footer">
        <div className="Footer-child">    
        <ul className="Footer-logo">
            <li><Image src={logo2} alt="footer logo" width={145} height={95}/></li>
        </ul>

        <ul className="Footer-Text">
            <li>Information</li><br />
            <li>Main</li> <br />
            <li>Gallery</li> <br />
            <li>Projects</li> <br />
            <li>Certifications</li> <br />
            <li>Contacts</li>
        </ul>

        <ul className="Footer-Contact">
            <li>Contacts</li> <br />
            <li className="location"><Image src={location} alt="locationImage"/><fieldset>1234 Sample Street Austin Texas 78704</fieldset></li> <br />
            <li className="phone"><Image src={phone} alt="phoneImage"/><fieldset>512.333.2222</fieldset></li> <br />
            <li className="message"><Image src={message} alt="messageImage"/><fieldset>sampleemail@gmail.com</fieldset></li>
        </ul>

        <ul className="Footer-SocialMedia">
            <li className="Heading">Social Media </li>
            <ul className="SocialImages">
            <li><Link href="https://https://facebook.com"><Image src={facebook} alt="facebook"/></Link></li>
            <li><Link href="https://https://twitter.com"><Image src={twitter} alt="twitter"/></Link></li>
            <li><Link href="https://linkedin.com/in/romaisa-khurram123"><Image src={linkedin} alt="linkedin"/></Link></li>
            <li><Image src={shape} alt="shape"/></li>
            </ul>
        </ul>
        </div>

        <hr />

        <p className="description">&copy; 2019 All Right Reserved</p>
        
    </div>
    
    )
}