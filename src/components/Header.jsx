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
          
          width: '100%',
          height: 130,
        },
        justifyContent: 'center',
        
        flexDirection: 'column'
      }}>
        <Typography variant ="h2" align= "center" style={{height:'14vh'}} >BRIL ARK</Typography>

        <Paper elevation ={0} style={{display:'flex', flexDirection:'row', justifyContent:'space-around', height:'10vh'}}> 
            <Typography variant ="body2" component="h1" align= "center" >Minimalismo</Typography>
            <Typography variant ="body2" component ="h1" align= "center" >Eficiencia</Typography>
            <Typography variant ="body2" component ="h1" align= "center" >Proporcion</Typography>
            <Typography variant ="body2" component ="h1" align= "center" >Geometria</Typography>
            <Typography variant ="body2" component ="h1" align= "center" >Inspiracion</Typography>
        </Paper>

        
    </Container>
  );
}
