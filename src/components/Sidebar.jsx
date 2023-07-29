import { Home, Pages, Groups, Storefront, Diversity1, Settings, AccountBox, ModeNight } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { Profiler } from 'react'

const Sidebar = ({mode, setMode}) => {
  return (
    <Box 
    
     flex={1} p={2}
     sx={{display: { xs:"none", sm: "block" } }}>
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
                <Diversity1 />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>

          </List>
          </Box>
      </Box>
  )
}

export default Sidebar