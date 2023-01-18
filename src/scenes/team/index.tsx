import { Box, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
    </Box>
  );
};

export default Team;
