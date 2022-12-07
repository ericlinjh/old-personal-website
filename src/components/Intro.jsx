import { React, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import resume from '../assets/resume.pdf'
import { motion, useAnimation } from 'framer-motion'

const ScrollToTop = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };
    return (
        <Box className="header-home header-box" style={{display: "none"}}> 
            <Box id="home-button">
                <FaHome size={36} onClick={goToTop} />
            </Box>

        </Box>
    )
}

export default function Header () {

    const control = useAnimation()

    const container = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.75,
                when:  "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }
 
    const welcomeVariant = {
        hidden: {
            y: "-5vw",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.5
            }
        }
    }
    return(    
        <Box className="header" style={{flexDirection: "column", justifyContent: "center", height: "100vh"}}>
            <ScrollToTop style={{display: "none"}}/>
            <Box className="header-logo header-box" style={{flexDirection: "column", alignItems: "center"}}>
                <motion.Box className="intro-text" variants={container} initial="hidden" animate="visible">
                    <motion.h3 
                        initial={{y: "-5vw", opacity: 0}}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                type: "tween",
                                duration: 0.5
                            }
                        }}
                        style={{fontFamily: "Work Sans"}}>
                            <em>Hi,</em>
                    </motion.h3>
                    <motion.h3 
                        variants={welcomeVariant}
                        style={{fontFamily: "Work Sans"}}>
                            <em>my </em>
                    </motion.h3>
                    <motion.h3 
                        variants={welcomeVariant}
                        style={{fontFamily: "Work Sans"}}>
                            <em>name</em>
                    </motion.h3>
                    <motion.h3 
                        variants={welcomeVariant}
                        style={{fontFamily: "Work Sans"}}>
                            <em>is</em>
                    </motion.h3>
                </motion.Box>
                <motion.div style={{display: "grid"}}
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2,
                            duration: 1
                        }
                    }}>
                    <h1 style={{fontWeight: 900, zIndex: "2"}}>Eric Lin</h1>
                    <h1 style={{fontWeight: 900, position: "absolute", color: "#9A9AA4"}}><em>Eric Lin</em></h1>
                </motion.div>
                <Box style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <motion.h6 initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 3.5,
                            duration: 1
                        }
                    }}>Student | Product Manager | Front-End Developer</motion.h6>
                </Box>
            </Box>
            <Box className="header-nav header-box" style={{display: "none"}}>
                <a>Blog</a>
                <a>Designs</a>
                <a href={resume} target="_blank">Resume</a>
            </Box>
        </Box>
    )
}
