import Link from "next/link";

export default function Footer () {
    return (
        <div className="Footer">
            <ul className="Footer-Button">
                <Link href="https://www.linkedin.com/in/romaisa-khurram123"><li>Linkedin</li></Link>
                <Link href="https://github.com/romaisakhurram"><li>GitHub</li></Link>
            </ul>
        </div>
    )
}