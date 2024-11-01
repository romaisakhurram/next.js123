import Image from "next/image"
import slideImage from "@/app/Images/slide-numbers.png"
import Rectangle2 from "@/app/Images/Rectangle 2.png"
import Rectangle3 from "@/app/Images/Rectangle 3.png"
import Rectangle4 from "@/app/Images/Rectangle 4.png"
import ImageOne from "@/app/Images/1.png"
import ImageTwo from "@/app/Images/2.png"
import Rectangle17 from "@/app/Images/Rectangle 17.png"
import image15 from "@/app/Images/image 15.png"
import image16 from "@/app/Images/image 16.png"
import image17 from "@/app/Images/image 17.png"
import image18 from "@/app/Images/image 18.png"
import image12 from "@/app/Images/image 12.png"
import Link from "next/link";


export default function Main () {
  return (
    <div className="homeContainer">

      <div className="childContainer">
        
        <div>
          <h1 className="h1">PROJECT</h1> 
          <h2 className="h2">Lorum</h2>
          <button className="leftButton"> ← </button>
          <button className="rightButton"> → </button>
          <Image src={slideImage} alt="image" width={141.28} height={53}  id="slideImage"/>
        </div>

        <div className="imageContainer">
          <h3 className="h3">View Project → </h3>
        </div>

      </div>

      <div className="AboutContainer">

        <div className="AboutImage">
          <Image src={Rectangle2} alt="About image" id="Image2" width={270} height={265}/>
          <Image src={Rectangle4} alt="About image" id="Image4" width={270} height={140}/>
        </div>
        <div className="AboutImage">
          <Image src={Rectangle3} alt="About image" id="Image3" width={270} height={345}/>
        </div>

        <div className="About">
          <h1 className="h1">About</h1>
          <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not 
          only five centuries, but also the leap into electronic typesetting, remaining essentially 
          unchanged.</p>
          <button className="Button">READ MORE</button>
        </div>
      
      </div>
            
      <div className="ChildContainer2">
        
        <h1 className="heading">Main Focus/Mission Statement</h1>
           
        <div className="grandChildContainer">
          <Image src={ImageOne} alt="image" width={120} height={140} id="Image5"/>
          <p className="Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>

          <Image src={ImageTwo} alt="image" width={120} height={140} id="Image6"/>
          <p className="Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
        </div>

      </div>

      <div className="ProjectContainer">
        <h1 className="heading">Our Project</h1>
          
          <div className="ImageContainer">
            <Image src={Rectangle17}  alt="image" width={570} height={255}/>
            <Image src={image15}  alt="image" width={570} height={255}/>
          </div>
          <div className="ImageContainer">
            <Image src={image16}  alt="image" width={270} height={255}/>
            <Image src={image17}  alt="image" width={470} height={255}/>
            <Image src={image18}  alt="image" width={370} height={255}/>
          </div>

          <button className="projectButton"><Link href="/PROJECTS">ALL PROJECTS</Link></button>
        
      </div>

      <div className="Contact">
        <h1 className="heading">Contact Us</h1>

        <div className="ContactContainer">

          <form className="ContactForm">
            <input type="text" name="Name" id="Name" placeholder="Name*"/><br />

            <input type="number" name="Number" id="Number" placeholder="Phone Number*"/><br />

            <input type="email" name="email" id="email" placeholder="Email*"/><br />

            <input type="text" name="interested" id="interested" placeholder="Interested In*"/><br />

            <textarea name="message" id="message" placeholder="Message"></textarea>
            
          </form>

          <div className="ContactImage">
           <Image src={image12} alt="image" width={749} height={369}/>
          </div>
            
        </div>

        <button className="contactButton">SEND E-MAIL</button>
      
      </div>


        
    </div>
  );
}
