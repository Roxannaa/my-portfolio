import {motion} from 'framer-motion';

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

export const Projects = () => {
    return (
    
        <motion.section id="projects" className='projects' initial={{opacity: 0}} whileInView={{opacity:1}} viewport={{once: true}} transition={{duration: 0.6}}>
            <motion.h2 variants={fadeInUp} initial="initial" whileInView="animate" viewport={{once : true}}> Featured Projects</motion.h2>
            <motion.div className='project-grid' variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once : true}}>
                 <motion.div className='project-card' variants={fadeInUp} whileHover={{y:-10, transition: {duration: 0.2}}}>
                    <h3> ⛓️‍💥 Personal Social Links Card </h3>
                    <p>
                        A simple and responsive React app designed to share who I am and where to find me online. It features a clean, modern interface that highlights my personal information, photo, and social media links in one accessible place.
                    </p>
                    <div className='project-tech'>
                        <span>React</span>
                        <span>CSS</span>
                        <span>HTML</span>
                        <span>Vite</span>
                        <span>Vercel(CI/CD)</span>
                        <span>JavaScript</span>
                    </div>
                    <a href="https://github.com/Roxannaa/social-media-links" target='_blank' class="arrow-link">
                        View Project  <span><i class="fa-solid fa-arrow-right"></i></span>
                    </a>
                 </motion.div>
                 <motion.div className='project-card' variants={fadeInUp} whileHover={{y:-10, transition: {duration: 0.2}}}>
                    <h3>🚀 My Portfolio </h3>
                    <p>
                        A fully responsive personal portfolio built with modern frontend tools. It showcases my work, skills, and professional experience through a clean and accessible interface, designed to highlight who I am as a developer.
                    </p>
                    <div className='project-tech'>
                        <span>React</span>
                        <span>CSS</span>
                        <span>HTML</span>
                        <span>JavaScript</span>
                        <span>Vite</span>
                        <span>Vercel(CI/CD)</span>
                    </div>
                    <a href="https://github.com/Roxannaa/my-portfolio/tree/main" target='_blank' class="arrow-link">
                        View Project  <span><i class="fa-solid fa-arrow-right"></i></span>
                    </a>
                 </motion.div>
                 {/* <motion.div className='project-card' variants={fadeInUp} whileHover={{y:-10, transition: {duration: 0.2}}}>
                    <h3> ⛓️‍💥 Personal Social Links Card </h3>
                    <p>
                        A simple and responsive React app designed to share who I am and where to find me online. It features a clean, modern interface that highlights my personal information, photo, and social media links in one accessible place.
                    </p>
                    <div className='project-tech'>
                        <span>React</span>
                        <span>CSS</span>
                        <span>HTML</span>
                        <span>JavaScript</span>
                    </div>
                    <a href="#" class="arrow-link">
                        View Project  <span><i class="fa-solid fa-arrow-right"></i></span>
                    </a>
                 </motion.div> */}
            </motion.div>
        </motion.section>
    );
};