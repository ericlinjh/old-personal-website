import {React} from 'react';
import { Box } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import headerlogo from '../assets/header-logo.png';

export default function Header () {
    return(    
        <Box className="header">
            <Box className="header-home header-box"> 
                <FaHome size={32} />
            </Box>
            <Box className="header-logo header-box">
                <img src={headerlogo} alt="Logo" />
            </Box>
            <Box className="header-nav header-box">
                <a>Blog</a>
                <a>Designs</a>
                <a>Resume</a>
            </Box>
        </Box>
    )
}
