import Main from "./components/Main"
import Blog from "./components/Blog"
import About from "./components/About"
import Contact from "./components/Contact"

export default function Home (){
  return(
    <div className="Home ">
        <Main/>
        <About/>
        <Blog/>
        <Contact/>
    </div>
  ) 
}