import Image from "next/image"
import agency from "@/app/components/images/agency.jpg"

export default  function Agency () {
    return (
        <div>
         <Image id="Picture" src={agency} alt="Image" />

          <h1 className="h1">**Top 19 US agency in powerhouses**</h1>

         <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ipsa suscipit facilis possimus consequatur magnam? Quae eveniet doloribus dolores debitis eos corporis! Eveniet deleniti deserunt ipsa sint adipisci voluptate dolor.</p>

        </div>

    )
}