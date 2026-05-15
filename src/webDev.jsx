import "./webDev.css";
import { Typography } from '@mui/material';
import AboutMe from "./about";
import NewSkillCard from "./newSkillcard";
import Contact from "./contact";
import ResponsiveAppBar from "./navbar.jsx"
import Navbar from "./navbar.jsx";

export default function WebDeveloper(){

    const handleMouseEnter = (e) => {
    const el = e.target;
    el.classList.add("animate-bounce");
    setTimeout(() => {
        el.classList.remove("animate-bounce");
    }, 1000); 
};


    return(
        <>
        <Navbar></Navbar>
        <div className="index" >
            
            <div className="container" >
                    <h1 className="name-container" style={{margin:0}} >
                        
                        <div className="name-word" onMouseEnter={handleMouseEnter}>A</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>D</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>I</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>N</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>A</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>T</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}
                        style={{marginRight:"4vw"}}>H</div>
                        
                        <div className="name-word" onMouseEnter={handleMouseEnter}>P</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>A</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>W</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>A</div>
                        <div className="name-word" onMouseEnter={handleMouseEnter}>R</div>
                    </h1>

                    <div className="work-container">
                        <div className="web skill">A MERN STACK-</div>
                        <div className="dev skill">DEVELOPER</div>
                    </div>
                    <p style={{color:"white", opacity:"0.5", textAlign:"center", }}><i>Designing seamless digital interactions by focusing on the<br></br> unique nuances which bring systems to life.</i></p>
                    <div className="imp-links">
                        <a href="#about" className=" white">About Me</a>
                        <a href="#contact" className="link-indx">Reach Out...</a>
                    </div>
                    <p style={{color:"white", opacity:"0.5",textAlign:"center", animation: "slideUp 1s linear", marginTop:"9rem"}}>
                        SCROLL DOWN
                    </p>
            </div>
        </div>
        
        <div className="about" id="about">
            <AboutMe></AboutMe>
        </div>
        
        <div id="projects">
            <NewSkillCard></NewSkillCard>
        </div>

        <div className="contact" id="contact">
            <Contact></Contact>
        </div>
        
       </>
    )
}