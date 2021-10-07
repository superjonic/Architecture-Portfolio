import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#00212C',
        },
        secondary: {
          main: '#f50057',
        },
      },
    // typography: {
    //   h4: {
    //     fontSize: '0.8rem',
    //     '@media(max-width : 600px)' : {
    //      fontSize: '0.6rem'  
    //     }  
    //   }
    // }  
      
  });


  // theme.typography.h4 = {
  //   fontSize: '0.8rem',
  //   '@media (min-width:600px)': {
  //     fontSize: '1rem',
  //     color: 'dark-grey'
      
  //   },
  // };

  export default theme