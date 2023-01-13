import { React } from 'react';
import { Box } from '@mui/material';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactMe () {
    return(
        <Box className="content" id="contact-me">
            <Box className="title">
                <p className="p1">Contact Me</p>
                <h6>I'd love to meet and have a chat with you!</h6>
            </Box>
            <p className="p2" id="contact-text">I’m currently looking for co-op opportunities for the Spring 2023 Term, but I’m more than happy to talk about anything you’d like!</p>
            <Box className="socials-list">
                <Box>
                    <FaEnvelope size={36} />
                    <a href="mailto:ericlinjh@hotmail.com" className="p2">ericlinjh@hotmail.com</a>
                </Box>
                <Box>
                    <FaLinkedin size={36} />
                    <a href="https://www.linkedin.com/in/ericlinjh/" className="p2">linkedin.com/in/ericlinjh</a>
                </Box>
                <Box>
                    <FaGithub size={36} />
                    <a href="https://github.com/ericlinjh" className="p2">github.com/ericlinjh</a>
                </Box>
            </Box>
        </Box>
    )
}