import * as React from 'react';
import{ Box, CardMedia, Paper } from '@mui/material';
import content from '../data/index';

const {houses, plans} = content

export default function Section() {

  console.log(content)
  return (

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 280,
          height: 400,
        },
        justifyContent: 'center'
      }}
    
    >
      <Paper elevation={1}>
         <CardMedia image = {houses[0]} style ={{height:'50vh'}} />
      </Paper>
        
      <Paper elevation={10}> 
          <CardMedia image = {houses[1]} style ={{height: '50vh'}}/>
      </Paper>

      <Paper elevation={3}> 
        <CardMedia image = {plans[2]} style ={{height: '50vh'}}/>
      </Paper>

      <Paper elevation={6}>
        <CardMedia image ={plans[1]} style={{height: '50vh'}}/>
      </Paper>
    </Box>
  );
}
