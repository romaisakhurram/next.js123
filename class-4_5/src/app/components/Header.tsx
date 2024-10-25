import Link from "next/link";

export default function Header () {
    return (
        <div className="Header">
                <ul className="Header-Button">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/Blog"><li>Blog</li></Link>
                    <Link href="/Contact-Us"><li>Contact-Us</li></Link>
                </ul>

        </div>
    );
}