import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function FiboSection() {
    return (
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Paper>Item 1</Paper>
          <Paper>Item 2</Paper>
          <Paper>Item 3</Paper>
        </Stack>
      </div>
    );
  }