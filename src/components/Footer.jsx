import * as React from 'react';
import {Container, Paper, Typography, BottomNavigation, BottomNavigationAction, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import { makeStyles } from '@mui/styles';


export default function Footer(){


    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
            // showLabels
            // value={value}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            >
                
                <BottomNavigationAction label="Whatsapp" icon={<WhatsAppIcon />} />
                <BottomNavigationAction label="Favorites" icon={<EmailIcon />} />
                <BottomNavigationAction label="Share"  icon={<ShareIcon />} />
            </BottomNavigation>
            
        </Paper>

    )
}


