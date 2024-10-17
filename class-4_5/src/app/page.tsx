import Responsive from "./Responsive/page"
import Portfolio from "./Porfolio/Page"
import Footer from "./components/Footer"

export default function Home (){
  return(
    <div className="HomeContainer">
      <Portfolio/>
      <Responsive/>
    </div>
  ) 
}