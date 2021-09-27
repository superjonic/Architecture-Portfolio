import * as React from 'react';
import Container from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import  Typography  from '@mui/material/Typography';

export default function Header() {
  return (
    <Container  sx={{
        display: 'flex',
        
        '& > :not(style)': {
          m: 1,
          width: '95%',
          height: 130,
        },
        justifyContent: 'center',
        marginBottom: '3vw'
      }}>
        <Paper elevation ={3}> 

            <Typography variant ="h2" align= "left">ARK Portfolio</Typography>

        </Paper>

        
    </Container>
  );
}
