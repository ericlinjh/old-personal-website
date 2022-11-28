import { React } from 'react';
import { Box } from '@mui/material';


export default function VerticalNav () {
    return(
        <Box className="vertical-nav">
            <Box className="vertical-nav-item">
                <a href="#about-me" className="vertical-nav-link" />
                <a href="#about-me" className="p2">about me</a>
            </Box>
            <Box className="vertical-nav-item">
                <a href="#work-experience" className="vertical-nav-link" />
                <a href="#work-experience" className="p2">work experience</a>
            </Box>
            <Box className="vertical-nav-item">
                <a href="#projects" className="vertical-nav-link" />
                <a href="#projects" className="p2">projects</a>
            </Box>
            <Box className="vertical-nav-item">
                <a href="#contact-me" className="vertical-nav-link" />
                <a href="#contact-me" className="p2">contact me</a>  
            </Box>
        </Box>
    )
}