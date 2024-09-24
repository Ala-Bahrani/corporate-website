import About from "../sections/About/About";
import BelowHeader from "../sections/BelowHeader/BelowHeader";
import Blog from "../sections/Blog/Blog";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Projects from "../sections/Projects/Projects";
import Services from "../sections/Services/Services";
import StatisticSite from '../sections/StatisticSite/StatisticSite'

const Batab = () =>{
    return(
        <div>
            <BelowHeader/>
            <About/>
            <Projects/>
            <StatisticSite/>
            <Services/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Batab;