import Image from "next/image"
import buisness from "@/app/components/images/buisness.jpg"


export default function Buisness () {
    return (
        <div>
            <Image  id="Picture" src={buisness} alt="image"/>
            <h1 className="h1">**How To Make Money Online For Beginners**</h1>
            
            <p  className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto repudiandae non fugiat aliquam saepe commodi error ea nesciunt itaque voluptatem natus, at doloribus, et dolore omnis, tempora dolorum distinctio!</p>

        </div>
    )
}