import { React } from 'react';
import { Box } from '@mui/material';
import eric from '../assets/eric.png';
import { FaGraduationCap, FaHammer, FaNewspaper } from 'react-icons/fa';

export default function AboutMe () {
    return(
        <Box className="content">
            <Box className="title">
                <p className="p1">About Me</p>
                <h6>Let me tell you about myself</h6>
            </Box>
            <Box className="bio">
                <p className='p2'>Hello! My name is Eric Lin and I am a Systems Design Engineering Student at the University of Waterloo. 
                I’m currently on my second co-op term, heading into 2A in Winter 2023. 
                I’ve worked positions as a front-end engineer and as a product manager at two smaller companies. 
                In the future, I hope to continue working as a Product Manager.</p>
                <img src={eric} alt="Portrait of Me" id="portrait"/>
                <p className='p2'>Professionally, my passions lie in health tech, neurology, and HCI. 
                I also enjoy design and the occasional coding, though PM still remains my favourite. 
                In my free time, I like to read manga, play video games, and edit videos and images. 
                At school, you can often find me with the Concert or Jazz Band, where I get the chance to relax and play some Sax!</p>
            </Box>
            <Box className="details">
                <Box className="credentials">
                    <h6>Profile</h6>
                    <Box>
                        <p className="p2">Full Name: Eric Jiahong Lin</p>
                        <p className="p2">Birth Date: June 27 2003</p>
                        <p className="p2">Location: Markham, Ontario</p>
                    </Box>
                </Box>
                <Box className="credentials">
                    <h6>Education</h6>
                    <Box>
                        <p className="p2">University of Waterloo</p>
                        <p className="p2">Bachelor of Applied Sciences</p>
                        <p className="p2">Systems Design Engineering</p>
                        <p className="p2">September 2021 - April 2026</p>
                    </Box>
                </Box>
            </Box>
            <Box className="interests">
                <h6>And this is what I like to do</h6>
                <Box className="interest-panels">
                    <Box>
                        <FaGraduationCap size={32} />
                        <p className="p1" id="interest-header">Learning</p>
                        <hr />
                        <p className="p2">Design Fundamentals</p>
                        <p className="p2">User Experience</p>
                        <p className="p2">Public Speaking</p>
                    </Box>
                    <Box>
                        <FaHammer size={32} />
                        <p className="p1" id="interest-header">Creating</p>
                        <hr />
                        <p className="p2">Web Apps</p>
                        <p className="p2">UI Designs</p>
                        <p className="p2">Pencil Sketches</p>
                    </Box>
                    <Box>
                        <FaNewspaper size={32} />
                        <p className="p1" id="interest-header">Following</p>
                        <hr />
                        <p className="p2">Joji</p>
                        <p className="p2">Mechanical Keyboards</p>
                        <p className="p2">Toronto Raptors</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}