import { React, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import headerlogo from '../assets/header-logo.png';
import resume from '../assets/resume.pdf'


const ScrollToTop = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };
    return (
        <Box className="header-home header-box"> 
            <Box id="home-button">
                <FaHome size={36} onClick={goToTop} />
            </Box>

        </Box>
    )
}

export default function Header () {
    return(    
        <Box className="header">
            <ScrollToTop />
            <Box className="header-logo header-box">
                <img src={headerlogo} alt="Logo" />
            </Box>
            <Box className="header-nav header-box">
                {/* <a>Blog</a>
                <a>Designs</a> */}
                <a href={resume} target="_blank">Resume</a>
            </Box>
        </Box>
    )
}
