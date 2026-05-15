import "../css/newSkillcard.css";
import { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Project1 from "../assets/project1.png"; 
import Project2 from "../assets/project2.png"; 
import Project3 from "../assets/project3.png"; 

export default function NewSkillCard(){

    const [currProject, setCurrProject] = useState(0);

    const [project, setProject] = useState([{
        title : "Air-BnB",
        description : ["Integrated Mapbox & Cloudinary APIs to automate geospatial geocoding and implement a dynamic image transformation pipeline, reducing frontend payload by 40%", "Architected RESTful Data Relations using Mongoose population and atomic $pull operators, ensuring 100% referential integrity across Listings, Reviews, and Users", "Engineered a Secure MVC Framework with Node.js and Passport.js, featuring server-side Joi validation and session-based authentication for scalable user management"],
        image : Project1,
        link : "https://air-bnb-project-l2dy.onrender.com/",
        color : [ "rgb(234, 166, 166)", "#a23a43","rgb(92, 15, 15)"],
        skills :["Express", "nodejs", "javascript","ejs", "mongoDB", "Bootstrap", "html", "CSS","Geocoding"]
    },{
        title : "Weather App",
        description :[ "This React-based Weather Application leverages the OpenWeatherMap API to deliver real-time meteorological data through a sleek, component-driven interface.", "Built using Functional Components and React Hooks, the app utilizes useState for dynamic data management and useEffect to handle asynchronous API calls and side effects.", "I implemented robust features such as city-based search functionality, unit conversion logic, and conditional rendering to display weather-specific icons and background states based on live conditions. By focusing on asynchronous JavaScript (Async/Await) and clean state transitions, the project demonstrates my ability to integrate third-party services and manage complex data flows within a highly responsive, mobile-first frontend environment."],
        image : Project2,
        link : "",
        color : ["rgb(155, 165, 128)", "rgb(136,71,28)", "rgb(131,121,73)"],
        skills :["javascript","React", "MaterialUI", "html", "CSS"]
     },
     {
        title : "Portfolio",
        description : ["Architected a Responsive Portfolio using React and Material UI (MUI), leveraging custom sx theming and component-driven design to create a glassmorphic user interface.","Developed a Secure Contact Engine with Formik, implementing Regex-based validation for real-time error handling and ensuring 100% data integrity before server-side transmission.","Engineered a  Communication Pipeline via a Node.js/Nodemailer microservice, utilizing SMTP protocols and CORS middleware to facilitate secure, asynchronous message delivery."],
        image : Project3,
        link : "#",
        color:[],
        skills :["Express", "node.js","Nodemailer", "javascript","React", "MaterialUI", "html", "CSS"],
        github:"https://github.com/Adinathpawar1671/portfolio"
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
                    
                    <ul>
                    {project[currProject].description.map((el, index) => {
                        return <li key={index}>{el}</li>;
                    })}
                    </ul>
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
                                <a className="project-link" href={project[currProject].github}>
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

