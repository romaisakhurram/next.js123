import  style from "@/app/Contact-Us/page.module.css";

export default function Contact () {
    const comment = "This is a contact page."; // ❌ Remove if unused
    return (
        <div className={style.Contact}>
            <h1 className={style.ContactHeading}> Contact Us:</h1>
            <p className={style.Description}>
                We’d love to hear from you! Whether you have a question about our services or just want to say hello, feel free to reach out.
            </p>

            <div className={style.contactInformation}>

             <h1 className={style.Heading}>Contact Information:</h1>
             <p>E-mail :<a href="mailto:romaisakhurram789@email.com">romaisakhurram789@email.com</a></p>
             <p>Contact Number :<a href="+92123456789">+92123456789</a></p>
             <p>Address : 123 street block 2 </p>

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
            
            </div>
        
        </div>
    );
}