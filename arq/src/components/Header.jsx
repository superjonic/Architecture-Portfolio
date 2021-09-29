import * as React from 'react';
import {Container, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  container : {
    border: `solid 3px ${theme.palette.primary.dark}` 
  }

}))



export default function Header() {
  const classes = useStyles()

  return (
    <Container  sx={{
        display: 'flex',
        
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 130,
        },
        justifyContent: 'center',
        marginBottom: '3vw'
      }}>
        <Paper elevation ={0}> 
            <Typography variant ="h2" align= "center" >BRIL ARK</Typography>
            <Typography variant ="body2" component="h1" align= "center" >Minimalismo</Typography>
            <Typography variant ="body2" component ="h1" align= "center" >Eficiencia</Typography>
            <Typography variant ="body2" component ="h1" align= "center" >Proporcion</Typography>
            <Typography variant ="body2" component ="h1" align= "center" >Geometria</Typography>
            <Typography variant ="body2" component ="h1" align= "center" >Inspiracion</Typography>




        </Paper>

        
    </Container>
  );
}
