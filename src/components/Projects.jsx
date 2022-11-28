import { React } from 'react';
import { Box } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa'
import garbageaimpreview from '../assets/garbageaim_preview.png'
import personalwebsitepreview from '../assets/personalwebsite_preview.png'

export default function Projects () {
    return (
        <Box className="content">
              <Box className="title">
                <p className="p1">Projects</p>
                <h6>And these are some of the things I've built</h6>
            </Box>
            <Box className="project-panel">
                <img src={garbageaimpreview} alt="Garbage Aim Image Preview"/>
                <Box className="project-blurb">
                    <Box className="basic-details">
                        <p className="p1">Garbage Aim</p>
                        <p className="p2">Web-based Educational Aim Trainer</p>
                        <p className="p2">Stormhacks 2022</p>
                    </Box>
                    <p className="p2 project-description">"G-aim" is a web app that has the goal of inspiring individuals to take a stand and learn more about waste disposal through an interactive game. 
                    We put your aim to the test while clicking on falling pieces of trash before it hits the beach floor! 
                    You have 6 lives to lose, so use them wisely!</p>
                    <Box className="additional-info">
                        <Box className="skills-list">
                            <p className="p3">React</p>
                            <p className="p3">Three.js</p>
                            <p className="p3">Figma</p>
                        </Box>
                        <Box id="learn-more">
                            <p className="p3">See More</p>
                            <FaArrowRight size={8}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="project-panel">
                <img src={personalwebsitepreview} alt="Personal Website Image Preview"/>
                <Box className="project-blurb">
                    <Box className="basic-details">
                        <p className="p1">Personal Website</p>
                        <p className="p2">Portfolio</p>
                    </Box>
                    <p className="p2 project-description">My Personal Website designed and coded from the ground up. 
                    First designed and prototyped using Figma, then coded in React with the help of MaterialUI. 
                    This website will contain a collection of the work I’ve done, as well as a personal blog where I share my thoughts on various things in my life!</p>
                    <Box className="additional-info">
                        <Box className="skills-list">
                            <p className="p3">Figma</p>
                            <p className="p3">React</p>
                            <p className="p3">MaterialUI</p>
                        </Box>
                        <Box id="learn-more">
                            <p className="p3">See More</p>
                            <FaArrowRight size={8}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}