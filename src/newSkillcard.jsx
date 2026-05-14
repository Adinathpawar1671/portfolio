import "./newSkillcard.css";
import { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Project1 from "./assets/project1.png"; 
import Project2 from "./assets/project2.png"; 
import Project3 from "./assets/project3.png"; 

export default function NewSkillCard(){

    const [currProject, setCurrProject] = useState(0);

    const [project, setProject] = useState([{
        title : "Air-BnB",
        description : "This Airbnb-inspired full-stack application is a robust demonstration of the MVC (Model-View-Controller) architecture, engineered with a Node.js and Express backend and a MongoDB database managed through Mongoose schemas. I implemented secure, session-based authentication and granular authorization using Passport.js, ensuring data integrity through strict server-side validation with Joi. The platform features seamless cloud-based media management via Cloudinary API for image hosting and integrates Mapbox SDK for geospatial data rendering. Styled with a blend of Bootstrap and Tailwind CSS and deployed on Render, the project highlights my ability to build complex, scalable RESTful APIs that bridge the gap between heavy backend logic and intuitive, responsive user experiences.",
        image : Project1,
        link : "https://air-bnb-project-l2dy.onrender.com/",
        color : [ "rgb(234, 166, 166)", "#a23a43","rgb(92, 15, 15)"],
        skills :["Express", "nodejs", "javascript","ejs", "mongoDB", "Bootstrap", "html", "CSS"]
    },{
        title : "Weather App",
        description : "This React-based Weather Application leverages the OpenWeatherMap API to deliver real-time meteorological data through a sleek, component-driven interface. Built using Functional Components and React Hooks, the app utilizes useState for dynamic data management and useEffect to handle asynchronous API calls and side effects. I implemented robust features such as city-based search functionality, unit conversion logic, and conditional rendering to display weather-specific icons and background states based on live conditions. By focusing on asynchronous JavaScript (Async/Await) and clean state transitions, the project demonstrates my ability to integrate third-party services and manage complex data flows within a highly responsive, mobile-first frontend environment.",
        image : Project2,
        link : "",
        color : ["rgb(155, 165, 128)", "rgb(136,71,28)", "rgb(131,121,73)"],
        skills :["Express", "nodejs", "javascript","React", "MaterialUI", "html", "CSS"]
     },
     {
        title : "Portfolio",
        description : "This developer portfolio is a high-performance React application designed with a cinematic Glassmorphism UI, overlaying a dynamic, AI-generated background featuring a 'Sodium Decay' aesthetic. Technically, the site utilizes CSS backdrop-filters and translucent layering to create depth, while integrating a looping, high-field video with an 'Impossible Camera' moveset to provide an immersive user experience. The architecture is fully responsive and component-driven, ensuring that the heavy visual assets are optimized for fast load times without sacrificing the 'epic' industrial-tech vibe. By bridging the gap between advanced generative media and modern frontend development, this project serves as a live demonstration of my ability to build polished, production-ready interfaces that prioritize both aesthetic impact and technical stability.",
        image : Project3,
        link : "",
        skills :["Express", "nodejs", "javascript","React", "MaterialUI", "html", "CSS"]
    },
    ]);    
    
    const colors = project[currProject].color || ["#beb7b7","#484646", "#1d1d1d"];
    
    const dynamicStyle = {
        backgroundImage: `linear-gradient(45deg,  ${colors[0]}, ${colors[1]}, ${colors[2]})`,
        backgroundSize: "400%",
        animation: "bg-animation 4s infinite alternate",
        transition: "all 0.8s ease-in-out",
        minHeight : "100vh",
        color : "white"
    };

    const arrowFunctionForward = ()=>{
            if(currProject>=0 && currProject<project.length-1){
               return setCurrProject((currval)=>currval+1)
            }       
    }

    const arrowFunctionBackward = ()=>{
        if(currProject>0 && currProject<project.length){
            return setCurrProject((currval)=>currval-1)
        }
    }


    return(
        <div className="projects" style={dynamicStyle} >
            
            <div className="project-info">  
                <div className="project-card">
                    
                    <h2 style={{fontSize: "8vw", margin:0}}>{project[currProject].title}</h2>
                    
                    <p>{project[currProject].description}</p>
                     <div className="tech-stack">
                        {
                            project[currProject].skills.map((el, indx)=>{
                               return  <span key={indx}className="project-skill">{el}</span>
                            })
                        }
                    </div>
                        {project[currProject].link !==""?(
                            <>
                                <a className="project-link" href={project[currProject].link}>
                                    Checkout Live <CallMadeIcon />
                                </a>
                                <a className="project-link">
                                    GitHub <CallMadeIcon />
                                </a>
                            </>
                        ):(
                            <>
                                <a className="project-link">
                                    No Live<CallMadeIcon />
                                </a>
                                <a className="project-link">
                                    No Repo <CallMadeIcon />
                                </a>
                            </>
                        )}
                    {/* </a> */}
                </div>
               
            </div>
    
            
            <div className="carousels-container">
                <div className="icon">
                    <div className="arrow" onClick={arrowFunctionBackward}>
                        <ArrowBackIcon ></ArrowBackIcon>
                    </div>
                    <div className="arrow" onClick={arrowFunctionForward}>
                         <ArrowForwardIcon ></ArrowForwardIcon>
                    </div>
                </div>
                <div className="carousels-cards">
                {
                    project.map((el, indx)=>(
                            <a aria-disabled key={indx} className="link" >
                                
                                <span 
                                className={`card-content ${currProject === indx ? "active" : indx < currProject ? "hide" : ""}`} 
                                style={{ backgroundImage: `url(${el.image})`,boxShadow: "-10px 10px 22px black", borderRadius:"20px" }}
                                >
                                </span>
                            </a>    
                    ))
                    }
                </div>
                

             </div>
             

        </div>
    )
}

