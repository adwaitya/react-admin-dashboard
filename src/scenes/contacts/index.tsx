import { Box, useTheme } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
    <Header
      title="CONTACTS"
      subtitle="List of Contacts for Future Reference"
    />
    </Box>
  )
}

export default Contacts