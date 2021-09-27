import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Section() {
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
      <Paper elevation={1} />
      <Paper elevation={10}/>
      <Paper elevation={3} />
      <Paper elevation={6} />
    </Box>
  );
}
