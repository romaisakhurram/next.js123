import Image from "next/image"
import buisness from "@/app/components/images/buisness.jpg"


export default function Buisness () {
    return (
        <div>
            <Image  id="Picture" src={buisness} alt="image"/>
            <h1 className="h1">**How To Make Money Online For Beginners**</h1>
            <p  className="paragraph">Artificial Intelligence (AI) has opened up new horizons for handling images. AI’s ability to recognize, generate, and manipulate images is advancing in ways that transform fields like digital art, e-commerce, healthcare, and entertainment.</p>

            <h1  className="h1">**1. Image Generation (Text-to-Image Models)**</h1>

            <p className="paragraph">One of the most notable advancements in AI is text-to-image generation. Tools like DALL·E (from OpenAI) allow users to describe a scene in text, and the AI generates highly detailed, creative images based on the input. These models learn from millions of images to produce realistic or stylized images in various art forms. This technology is widely used in</p>


        </div>
    )
}