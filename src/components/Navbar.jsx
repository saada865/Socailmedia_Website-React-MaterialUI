import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {

  const styledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
  })

  return (
    <AppBar position="stick">
      <Toolbar>
      Navbar
      </Toolbar>
      </AppBar>
  )
}

export default Navbar