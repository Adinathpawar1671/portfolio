import "./navbar.css";
import { NavLink } from "react-router";
import myResume from './assets/resume.pdf'; 

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="align-items">
                <a href="#" className="navbar-links link-cont">Home</a>
                <a href="#projects" className="navbar-links link-cont">Work</a>
                <a href="#contact" className="navbar-links link-cont">Contact</a>
                <a href={myResume} target="_blank" rel="noreferrer" className="navbar-links link-cont">Resume
                </a>
            </div>
        </div>
    );
}