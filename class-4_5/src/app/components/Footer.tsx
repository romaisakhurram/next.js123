import Link from "next/link";

export default function Footer () {
    return (
        <div className="Footer">
            <p className="FooterParagraph">
             "Thank you for visiting my portfolio! I'm passionate about IT field , web development, design and love
              creating innovative, user-friendly solutions. Let's connect and bring your ideas to life!
              Whether you're looking for collaborations, freelance opportunities, or just want to chat, 
              feel free to reach out via . You can also find me on  Linkedin and GitHub. 
               Feel free to personalize it with your specific field, contact preferences, and any
               additional information you'd like to include!
            

            <ul className="Footer-Button">
                <Link href="https://linkedin.com/in/romaisa-khurram123"><li> Linkedin</li></Link>
                <Link href="https://github.com"><li>GitHub Account</li></Link>
            </ul>
            </p>

        </div>
    );
}