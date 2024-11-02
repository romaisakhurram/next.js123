import Image from "next/image";
import football from "@/app/components/images/football.jpg"

export default function Football () {
    return (
        <div>
             
            <Image id="Picture"  src={football} alt="api image" />

            <h1 className="h1">**Liverpool FC**</h1>

            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam non cupiditate dignissimos labore quas. Quas assumenda, possimus, perferendis provident maiores recusandae alias sint deleniti harum ab, sequi ut perspiciatis voluptate?</p>
        
        </div>
    )
}