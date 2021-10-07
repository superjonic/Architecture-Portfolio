import * as React from 'react';
import {Container, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  container : {
    border: `solid 3px ${theme.palette.primary.dark}` 
  },
  textMin: {
    [theme.breakpoints.down('sm')]: {
      fontSize: [10, '!important'],
    },
  
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
        <Typography variant ="h2" align= "center" style={{height:'10vh'}} >BRIL ARK</Typography>
        <Typography variant ="subtitle2" align= "center" style={{height: '1%', fontSize: "0.85rem", color:'rgb(42, 43, 44)'}} >STUDIO</Typography>
        

        <Paper elevation ={0} style={{display:'flex', justifyContent:'center', height:'10vh', marginTop:'1vh'}}> 
            <Typography component="h4" className={classes.textMin} > m i n i m a l i s m o e f i c i e n c i a p r o p o r c i o n i n s p i r a c i o n</Typography>
            {/* <Typography component ="h4" >eficiencia</Typography>
            <Typography  component ="h4">proporcion</Typography>
            <Typography  component ="h4" >inspiracion</Typography> */}
        </Paper>

        
    </Container>
  );
}
