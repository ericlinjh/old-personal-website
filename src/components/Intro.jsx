import { React, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import resume from '../assets/resume.pdf'
import { FaHome } from 'react-icons/fa';
import { motion, useAnimation, useScroll } from 'framer-motion'

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

const fullIntro = {
    hidden: { opacity: 1},
    visible: { opacity: 1 },
    exit: {opacity: 0, transition: {
        ease: "easeOut", duration: 1
    }}
}

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
            ease: "easeOut",
            duration: 0.5
        }
    }
}

const Intro = ({ setLoading }) => {
    return(    
        <motion.Box className="header" style={{flexDirection: "column", justifyContent: "center", height: "100vh"}}>
            <motion.div
                variants={fullIntro}
                initial='hidden'
                animate='show'
                exit='exit'>
            <Box className="header-logo header-box" style={{flexDirection: "column", alignItems: "center"}}>
                <motion.Box className="intro-text" variants={container} initial="hidden" animate="visible" exit="exit">
                    <motion.h3 
                        initial={{y: "-5vw", opacity: 0}}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                ease: "easeOut",
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
                            ease: "easeOut",
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
                            ease: "easeOut",
                            delay: 3.5,
                            duration: 1
                        }
                    }} onAnimationComplete={() => setLoading(false)}>Student | Product Manager | Front-End Developer</motion.h6>
                </Box>
            </Box>
        </motion.div>
        </ motion.Box>
    )
}

export default Intro;