import "../css/contact.css";
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';;
import Button from '@mui/material/Button';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import {useState} from 'react';
import {useFormik} from 'formik';

export default function Contact() {
    // import.meta.env.VITE_API_URL || 
    const BACKEND_URL = "https://portfolio-backend-h7qv.onrender.com" ;
    const validate = values => {
    const errors = {};
  
   if (!values.message) {
     errors.message = 'Required';
   } else if (values.message.length > 110) {
     errors.message = 'Must be 20 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };

const formik = useFormik({
    initialValues : {
        name : '',
        email : '',
        subject : '',
        message : '',
    },
    validate,
    onSubmit : async (values) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                alert("Message Sent successfully!");
                formik.resetForm();
            } else {
                alert("something went wrong.");
            }
        } catch (error) {
            console.error("Connection failed:", error);
            alert("Is your Node server running on port 8080?");
        }
    }

})

    const textFieldStyle = {
        mb: 3, 
        "& .MuiInputLabel-root": { color: "white", fontFamily: "'DM Serif Display', serif" },
        "& .MuiInputLabel-root.Mui-focused": { color: "rgb(249, 246, 246)" }, 
        "& .MuiInput-root": { 
            color: "white", 
            fontFamily: "'DM Serif Display', serif",
            "&:before": { borderBottomColor: "white" },
            "&:hover:not(.Mui-disabled):before": { borderBottomColor: "white" }, 
            "&:after": { borderBottomColor:"rgb(249, 246, 246)"  }, 
        },
    };


    return (
        <div className="contact-me">
            <h1 style={{fontSize: "5vw", marginTop :"0", padding:"2rem 0 0 1rem"}}>Contact Me</h1>
            <div className="contact-container">
                <div className="contact-message" >
                    <p> I’m currently looking for new opportunities to drop my Master’s-level theory and 'build-anything' energy into a real-world team. If you’re looking for a developer who’s as fascinated by the 'why' as the 'how,' let’s grab a virtual coffee and see what we can create.
                    </p>
                    <div className="contact-links">
                        <a href="https://github.com/Adinathpawar1671" className="contact-link" > 
                            <span><GitHubIcon sx={{ fontSize: 30 }}></GitHubIcon></span>&nbsp;
                            <p>Github</p>
                        </a>
                        <a href="https://www.linkedin.com/in/adinathpawar?" className="contact-link">
                            <span><LinkedInIcon sx={{ fontSize: 30 }}></LinkedInIcon></span>&nbsp;
                            <p>Linkedin</p>
                        </a>
                        <a href="tel:+919699984367"className="contact-link">
                            <span><LocalPhoneIcon sx={{ fontSize: 30 }} ></LocalPhoneIcon></span>&nbsp;
                            <p>9699984367</p>
                        </a>
                         <a href="https://leetcode.com/u/2kobUVKinF/"className="contact-link">
                            <span><DeveloperModeIcon></DeveloperModeIcon></span>&nbsp;<p>Leetcode</p>
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="contact-input">
                            <TextField
                                id="standard-multiline-flexible fullWidth"
                                label="Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                name = "name"
                                fullWidth
                                sx={textFieldStyle}
                                value={formik.values.name}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}  
                            />
                        </div>
                        
                        <div className="contact-input">
                            <TextField
                                id="standard-multiline-flexible"
                                label="Email"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                sx={textFieldStyle}
                                name = "email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>
                        <div className="contact-input">
                            <TextField
                                id="standard-multiline-flexible"
                                label="Work"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                sx={textFieldStyle}
                                name = "subject"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                error={formik.touched.subject && Boolean(formik.errors.subject)}
                                helperText={formik.touched.subject && formik.errors.subject}
                            />
                        </div>

                        <div className="contact-input last">
                            <TextField
                                id="standard-multiline-flexible"
                                label="Message"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                sx={textFieldStyle}
                                name = "message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}

                            />
                        </div>

                       <Button variant="outlined" size="large" 
                       sx={{color:"white",opacity:"0.8",border:"none", borderRadius:"20px", backgroundColor:" rgba(154, 150, 150, 0.24)", marginBottom:"2rem", fontFamily: "DM Serif Display, serif",fontStyle: "italic"}}
                       type="submit" >
                        Send
                       </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}