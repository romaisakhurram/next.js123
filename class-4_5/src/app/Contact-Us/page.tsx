import { comment } from "postcss";

export default function Contact () {
    return (
        <div className="Contact">
            <h1 className="ContactHeading"> Contact Us:</h1>
            <p className="Description">
                We’d love to hear from you! Whether you have a question about our services or just want to say hello, feel free to reach out.
            </p>
            <div className="contactInformation">
             <h1 className="Heading">Contact Information:</h1>
             <p>E-mail :<a href="mailto:romaisakhurram789@email.com">romaisakhurram789@email.com</a></p>
             <p>Contact Number :<a href="+92123456789">+92123456789</a></p>
             <p>Address : 123 street block 2 </p>
            </div>
            <form className="Form">
                <h1 className="ContactForm">Form</h1>
                <label className="name">Name: </label>
               <input type="text"  id="name" />
                <br /> <br />
               <label  className="email">E-mail: </label>
               <input type="email" id="email"/>
               <br /> <br /> 
               <label  className="message">Message:</label>
               <textarea typeof="message" id="message"  />
                <br /> <br /> 
               <button className="submitButton">Submit</button>
            </form>
        </div>
    );
}