import Image from "next/image"
import contactImage from "@/app/components/images/contactImage.png"

export default function Contact () {
    return (
        <div className="ContactContainer bounce-in-right">

           <h1 className="ContactHeading">Contact Us</h1>
          
           <div className="ContactChild">
                <form className="Form">
            
                  <label className="name">Name: </label>
                  <input type="text"  id="input" />
                  <br /> <br />
               
                  <label  className="email">E-mail: </label>
                  <input type="email" id="input"/>
                  <br /> <br /> 
               
                  <label  className="message">Message:</label>
                  <textarea typeof="message" id="input" />
                  <br /> <br /> 
               
                  <button className="submitButton">Submit</button>
            
                </form>

             <Image src={contactImage} alt="contactImage" width={800} height={400} id="Image"/>

            </div>

        </div>
    )
}