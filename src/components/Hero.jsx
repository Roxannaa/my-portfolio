import {motion} from "framer-motion";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
    initial: {opacity: 0, y:20}, 
    animate: {opacity: 1, y: 0}, 
    transition: {duration: 0.6},
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Hero = () => {
    return (
        <motion.section id="home" className="hero" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, delay: 0.2}}>
            <div className="hero-container">
                <motion.div className="hero-content" variants={staggerContainer} initial="initial" animate="animate">
                    <motion.div className="hero-badge">
                        <span> 🙋🏽‍♀️ Hello, I'm</span>
                    </motion.div>
                    <motion.div>
                        <motion.h1 className="glitch" variants={fadeInUp} whileHover={{scale: 1.02}}> Roxanna Alburquerque </motion.h1>
                        <motion.h2 className="hero-subtitle" variants={fadeInUp}> Frontend Focused Software Developer</motion.h2>
                        <motion.p className="hero-description" variants={fadeInUp}> 3+ years of experience, passionate about building clean, and meaningful digital experiences. I’ve worked with .NET, Blazor, JavaScript, HTML, and CSS, and I also enjoy creating personal projects with React, where I explore modern ideas. I love turning concepts into beautiful, functional interfaces since I believe it's not just about writing code, but about creating experiences that connect with people while solving real problems and meeting their needs. </motion.p>
                    
                        <motion.div className="cta-buttons" variants={staggerContainer}>
                            <motion.a href="#projects" className="cta-primary" whileHover={{scale: 1.05}} whileTap={{scale: 1.05}}>
                                My Work
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/roxanna-alburquerque-softwaredev/" target="_blank" className="cta-secondary" whileHover={{scale: 1.05}} whileTap={{scale: 1.05}}>
                                    Contact Me
                                </motion.a>
                        </motion.div>
                        {/* <motion.div className="social-links" variants={staggerContainer}>
                            <motion.a href="https://github.com/Roxannaa" target="blank">
                                <i className="fab fa-github"></i>
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/roxanna-alburquerque-softwaredev/" target="blank">
                                <i className="fab fa-linkedin"></i>
                            </motion.a>
                             <motion.a href="https://www.instagram.com/codewroxanna/" target="blank">
                                <i className="fab fa-instagram"></i>
                            </motion.a>
                        </motion.div> */}
                    </motion.div>
                </motion.div>
                <motion.div className="hero-image-container" initial={{opacity: 0, x:50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.4}}>
                    <div className="code-display">
                        <SyntaxHighlighter language="javascript" customStyle={{margin: 0, padding: "2rem", height: "100%", borderRadius: "20px", background: "rgba(30, 41, 59, 0.8)", backdropFilter: "blur(10px)", marginBottom: 50}} style={vscDarkPlus}> 
                             {`const aboutMe: DeveloperProfile = {
    codename: "Roxanna Alburquerque 👾",
    origin: "🇩🇴 Somewhere in the world 🇩🇴",
    role: "Frontend Artist & Coder",
    stack: {
        languages: ["C#", "JavaScript", "SQL"],
        frameworks: ["React", ".NET", "Blazor", "Bootstrap"],
    },
    traits: [
        "pixel-perfectionist",
        "UI matchmaker",
        "dark mode advocate",
        "open to challenges",
    ],
    missionStatement:
        "Building meaningful software, one line at a time 💻✨",
    availability: "Available for hire & good coffee talks ☕️",
};`} 
                        </SyntaxHighlighter>
                    </div>

                    <motion.div className="floating-card" animate={{y: [0, -10, 0], rotate: [0, 2, 0]}} transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}>
                        <div className="card-content">
                            <span className="card-icon"> 💻 </span>
                            <span className="card-text"> Currently working on something cool 🌟</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );   
};