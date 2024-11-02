import profilePic from "@/app/components/images/profilePic.png"
import Image from "next/image"
import Link from "next/link"
import agency from "@/app/components/images/agency.jpg"
import buisness from "@/app/components/images/buisness.jpg"
import car from "@/app/components/images/car.jpg"
import contactImage from "@/app/components/images/contactImage.png"

export default function Home (){
  return(
    <div className="Home bounce-in-right">

      <div className="Children">

        <div className="GrandChild">

         <h1 className="h1">BLOG   <br /> 
            Website 
         </h1>
         <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi eaque amet corrupti cumque vero exercitationem ipsum impedit consequuntur ullam, placeat, neque ut distinctio eligendi dolorum ducimus maxime quas perspiciatis?</p> 
  
        </div>

        <div className="Image">
         <Image  src={profilePic} alt="profile pic" width={1500} height={400} />
        </div>

      </div>

      <div className="AboutContainer">

        <div>
          <h1 className="Heading">About Us</h1>
          <h1 className="H1"> Introduction</h1>
          <p className="paragraph">- My name is Romaisa , I am a professional web developer.
             - your passion for coding, your journey into web development, and how you turned your passion into a career.
             - HTML , CSS , TYPESCRIPT , NEXT JS, frameworks and specialize  in NEXT JS .
          </p>
          <h1 className="H1">My Web Development Journey</h1>   
          <p className="paragraph"> -your journey from the beginning: how you got started with programming and what inspired you to pursue web development.
             - I am enrolled In GIAIC (Goverment Iniatiative Of Artificial Intelligence).
          </p>
            
          <h1 className="H1">My Skills and Expertise</h1>
          <p className="paragraph">
             - Dive deeper into your technical skills, focusing on front-end and back-end development.
             - Include details proficiency with key technologies,:
             - Front-end: HTML5, CSS3, JavaScript (React, Next.js, Vue.js)
             - Back-end: Node.js, Express, MongoDB, etc.
             - Version control: Git, GitHub
             - APIs and integrations
             - Provide examples of how you use these technologies in your work, explaining your approach to solving common problems like performance issues, loading speed, and scalability.
          </p>

        </div>

      </div>
       
      <div className="BlogsContainer">

        <h1 className="Heading">Blogs</h1>

        <div className="childContainer">

        <div className="imageConatiner">
         <Image src={agency} alt="image"/>
        </div> 
        <h2 className="title">Top 19 US agency in powerhouses</h2> 
        <p className="description">Unveiling the Best: Top 19 Us Travel Agency Powerhouses The US travel agency sector is boomong. It offers many services...</p>
        <button className="button"><Link href="/Agency">Read More</Link></button>
        </div>

        <div className="childContainer">

        <div className="imageConatiner">
         <Image src={buisness} alt="image"/>
        </div> 
        <h2 className="title">How To Make Money Online For Beginners</h2> 
        <p className="description">How to Make Money Online For Beginners: 7 Ways To Make Money Online How To Make Money Online For Beginners?...</p>
        <button className="button"><Link href="/Buisness">Read More</Link></button>
        </div>

        <div className="childContainer">
        <div className="imageConatiner">
         <Image src={car} alt="image"/>
        </div> 
        <h2 className="title">Top 19 US agency in powerhouses</h2> 
        <p className="description">How to Make Money Online For Beginners: 7 Ways To Make Money Online How To Make Money Online For Beginners?...</p>
        <button className="button"><Link href="/Car">Read More</Link></button>
        </div>

        <div className="buttonContainer">
         <button className="LoadButton"><Link href="/Blog">Load More</Link></button>
        </div>

      </div>
       
       <div className="ContactContainer">

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













    </div>
  ) 
}