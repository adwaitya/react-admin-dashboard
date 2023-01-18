
import { Box, IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { PersonOutline } from "@mui/icons-material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ml: 2, flex:1}} placeholder="Search"/>
        <IconButton type="button" sx={{p :1}}>
          <SearchIcon/>
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display='flxe'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ?( <DarkModeOutlineIcon/>) : (<LightModeOutlinedIcon/>)}
         
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>

        </IconButton>
        <IconButton>
          <PersonOutline/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
