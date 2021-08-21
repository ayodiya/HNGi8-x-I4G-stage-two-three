import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const useStyles = makeStyles(theme => ({
  toolbar: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '150px',
      paddingRight: '150px'
    }
  },
  appBar: {
    backgroundColor: ({ scroll }) => (scroll ? 'white' : '#f4f6f8')
  }
}))

const navLinks = [
  { url: 'about', text: 'About' },
  { url: 'skills', text: 'Skills' },
  { url: 'portfolio', text: 'Portfolio' },
  { url: 'experience', text: 'Experience' },
  { url: 'education', text: 'Education' }
]

const Navbar = () => {
  const [scroll, setScroll] = React.useState(false)
  const classes = useStyles({ scroll })

  React.useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 0)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])

  return (
    <>
      <Box>
        <AppBar className={classes.appBar} position='fixed' elevation={0}>
          <Toolbar className={classes.toolbar}>
            <MobileNavbar navLinks={navLinks} />
            <DesktopNavbar navLinks={navLinks} />
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  )
}

export default Navbar
