import './about.css'

export default function AboutMe() {
    return (

            <div className="about-card">
                <div className="about-container">
                    <h1 style={{ fontSize: "5vw", color: "white", margin: "0", animation: "slideUp 1s linear", display:"inline-block"}}><i>About Me</i></h1>
                    <div className="about-text-container">
                        <div className='about-txt'>
                            <p style={{ color: 'white', }}>
                                <span style={{ display: "inline-block", margin: "0", fontSize:"2rem" }}>H</span>
                                <span style={{ display: "inline-block", margin: "0", fontSize:"2rem" }}>i &nbsp;</span> 
                                I recently wrapped up my Bachelor’s and survived the first year of my Master’s in CS. While the academics are great, my real obsession is building things that live on the web. I’ve spent my time lately diving deep into the MERN stack, specifically through projects like a full-scale Airbnb clone, a weather app that actually looks good, and the portfolio you’re clicking through right now. Whether I’m wrestling with logic in Java, C++, or Python, or getting a layout just right with Tailwind, I’m happiest when I’m turning a blank VS Code window into a functional, scalable piece of software.
                                <br></br>
                                <br></br>
                                Beyond the code, I’ve got a soft spot for the "why" behind the "how." I recently did a Design Thinking workshop with RT-MSSU Mumbai, which changed the way I look at development—it's not just about making the code work; it’s about making it make sense for the person on the other side of the screen. Right now, I’m hunting for a MERN Stack or Software Dev role where I can drop my mix of academic theory and "build-everything" energy into some epic projects. Technology is everywhere you look, and I just want to be one of the people behind the curtain making it all move.
                            </p>
                        </div>
                    </div>
                    <div className='about-skills'>
                        <h2 style={{ textAlign: "center", color: 'white', opacity:"0.8"}}>Skills and Technologies</h2>
                        <div className="skills-txt">

                            <div className="skill-card" >
                                <img src="https://cdn.simpleicons.org/nodemon" alt="nodemon Logo" />
                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/cplusplus" alt="c++ Logo" />
                            </div>

                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/javascript" alt="JS Logo" />
                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/c" alt="c" width="50" />

                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/python" alt="python Logo" />
                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/react" alt="React Logo" />
                            </div>
                            <div className="skill-card">
                                <img src='https://cdn.simpleicons.org/tailwindcss' alt="taileindcss Logo" />
                            </div>
                            <div className="skill-card">
                                <img src='https://cdn.simpleicons.org/express/black' alt="express Logo" />
                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/github/black" alt="github Logo" />
                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/mongodb" alt="mongodb Logo" />
                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/sqlite" alt="sqlite Logo" />
                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/nodedotjs" alt="nodejs Logo" />
                            </div>
                            <div className="skill-card">
                                <img src="https://cdn.simpleicons.org/openjdk" alt="java Logo" />
                            </div>
                            <div className="skill-card">
                                <img src='https://cdn.simpleicons.org/render' alt="render Logo" />
                            </div>
                            <div className="skill-card">
                                <img src='https://cdn.simpleicons.org/npm' alt="npm Logo" />
                            </div>
                            <div className="skill-card">
                                <img src='https://cdn.simpleicons.org/ejs/white' alt="ejs Logo" />
                            </div>
                            <div className="skill-card">
                                <img src='https://cdn.simpleicons.org/bootstrap' alt="ejs Logo" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}
