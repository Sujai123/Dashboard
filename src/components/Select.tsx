import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';

export default function Select() {

  return (
    <Box minWidth="120px">
      <FormControl fullWidth>
        <MuiSelect
          value="Monthly"
        >
          <MenuItem value={10}>Monthly</MenuItem>
          <MenuItem value={20}>Yearly</MenuItem>
        </MuiSelect>
      </FormControl>
    </Box>
  );
}