import './about.css'

export default function AboutMe() {
    return (

            <div className="about-card">
                <div className="about-container">
                    <h1 style={{ fontSize: "5vw", color: "white", margin: "0", animation: "slideUp 1s linear", display:"inline-block"}}><i>About Me</i></h1>
                    <div className="about-text-container">
                        <div className='about-txt'>
                            <p style={{ color: 'white', }}>
                                I focus on building reliable systems and adapting to the right tech stack for the problem at hand. Recently, I designed and built a full-stack property rental platform from scratch using JavaScript, React, MongoDB, HTML, and CSS.
                                <br></br>
                                <ul>
                                    Core Technologies:
                                    <li>Languages: Java, C++, C#, Python, JavaScript
                                    </li>
                                    <li>Tools:Git, GitHub, VS Code, Jupyter Notebook, Hoppscotch, IntelliJ 
                                    </li>
                                    <li>Databases: MongoDB and MySQL</li>
                                    <li>Coursework: Data Structures and Algorithms, Object-Oriented Programming,Database Management Systems, Web Development, AAC</li>
                                    <li>Libraries/Frameworks: React,Bootstrap, Material UI, Express.js</li>

                                </ul>
                                <br></br>
                                Through academic team projects, I regularly collaborate to ship web applications, focusing on scalable architecture and security fundamentals.
                                <br></br>
                                I am currently looking for an internship where I can contribute to real-world, user-facing applications and write    production-level code.
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
