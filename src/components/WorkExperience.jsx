import { React } from 'react';
import { Box } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa'
import novapreview from '../assets/nova_preview.png'
import desouzapreview from '../assets/desouza_preview.png'

export default function WorkExperience () {
    return (
        <Box className="content">
              <Box className="title">
                <p className="p1">Work Experience</p>
                <h6>Here’s the story of my career so far</h6>
            </Box>
            <Box className="horizontal-panels">
                <Box className="work-panel">
                    <Box className="job-details">
                        <p className="p1">Nova</p>
                        <p className="p2">Product Manager</p>
                        <p className="p2">Sep 2022 - Dec 2022</p>
                    </Box>
                    <img src={novapreview} alt="Nova Image Preview"/>
                    <p className="p2 work-description">Worked with the Experience Pod, a group of 8 engineers focused on front-end improvements to Nova’s Hub. 
                    Designed, documented, and new features and improvements using Figma and JIRA. 
                    Organized and oversaw biweekly sprints, assigning and planning the correct amount of the tickets to the appropriate workers. 
                    Conducted user research on 200+ users through A/B testing and use of SmartLook. 
                    Wrote, optimized, and analyzed MySQL queries to better understand usage of different features.</p>
                    <Box className="work-additional-info">
                        <Box className="skills-list">
                            <p className="p3">Figma</p>
                            <p className="p3">JIRA</p>
                            <p className="p3">MySQL</p>
                            <p className="p3">Google DV360</p>
                        </Box>
                        <Box id="learn-more">
                            <p className="p3">Learn More</p>
                            <FaArrowRight size={8}/>
                        </Box>
                    </Box>
                </Box>
                <Box className="work-panel">
                    <Box className="job-details">
                        <p className="p1">de Souza Institute</p>
                        <p className="p2">DevOps Engineering Assistant</p>
                        <p className="p2">Jan 2022 - Apr 2022</p>
                    </Box>
                    <img src={desouzapreview} alt="de Souza Image Preview"/>
                    <p className="p2 work-description">Programmed and updated changes to the front‑end design of the e‑Learning Centre, serving a new modern, responsive, and accessible platform to 18,000+ health care professionals. 
                    Developed, documented, and deployed a React port of the Virtual Library, improving site security and performance. 
                    Designed and coded an automated GANTT chart used to schedule and organize 30+ courses throughout the year, removing user frustrations and streamlining the scheduling process</p>
                    <Box className="work-additional-info">
                        <Box className="skills-list">
                            <p className="p3">React</p>
                            <p className="p3">Moodle</p>
                            <p className="p3">Mustache</p>
                        </Box>
                        <Box id="learn-more">
                            <p className="p3">Learn More</p>
                            <FaArrowRight size={8}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}