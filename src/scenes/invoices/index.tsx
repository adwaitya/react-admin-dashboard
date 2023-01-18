import { useTheme, Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      </Box>
  )
}

export default Invoices