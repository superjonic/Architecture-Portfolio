import * as React from 'react';
import{ Box, CardMedia, Paper } from '@mui/material';
import {content} from '../data/index';
import { makeStyles } from '@mui/styles';

const {houses, plans} = content

export default function Section() {


  return (

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 450,
        },
        justifyContent: 'center'
      }}
    
    >
    
        
      <Paper elevation={0}> 
          <CardMedia image = {houses[0]} style ={{height:'100%', backgroundSize:'contain'}}/>
      </Paper>

      <Paper elevation={0}> 
        <CardMedia image = {plans[2]} style ={{height:'100%', backgroundSize:'contain'}}/>
      </Paper>

      <Paper elevation={0}>
        <CardMedia image ={plans[1]} style ={{height:'100%', backgroundSize:'contain'}}/>
      </Paper>
    </Box>
  );
}
