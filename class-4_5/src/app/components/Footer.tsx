import Link from "next/link";
import linkedin from "@/app/components/images/linkedin.png"
import github from "@/app/components/images/github.png"
import facebook from "@/app/components/images/facebook.png"
import Image from "next/image"

export default function Footer () {
    return (
        <div className="Footer">
             
            <div className="FooterChild"> 
            <ul className="Footer-Button">
                <li className="">Social Media</li>
                <ul className="SocialImages">
                 <li><Link href="https://linkedin.com/in/romaisa-khurram123"><Image src={linkedin} alt="image" width={30} height={30}/></Link></li>
                 <li><Link href="https://github.com"><Image src={github} alt="image" width={30} height={30} /></Link></li>
                  <li><Link href="https://facebook.com/romaisa-khurram"><Image src={facebook} alt="image" width={30} height={30} /></Link></li>
                </ul>
            </ul>

            <ul className="Footer-Product">
                <li>Product</li> <br />
                <li>Automated Chatbot</li> <br />
                <li>Data Security</li> <br />
                <li>Virtual Reality</li> <br />
                <li>Communication</li> <br />
                <li>Support</li>
            </ul>

            <ul className="Footer-Services">
                <li>Services</li> <br />
                <li>Privacy Policy</li> <br />
                <li>Terms & Condition</li> <br />
                <li>FAQ;s</li> <br />
                <li>Contact Us</li> <br />
                <li>About Us</li> 
            </ul>

            <ul className="Footer-Company">
                <li>Company</li> <br />
                <li>About Us</li> <br />
                <li>Features</li> <br />
                <li>Our Pricing</li> <br />
                <li>Services</li> <br />
                <li>Latest News</li>
            </ul>
            </div>
            <hr />

            <p className="FooterLine">&copy; 2019 All Right Reserved</p>

        </div>
    );
}