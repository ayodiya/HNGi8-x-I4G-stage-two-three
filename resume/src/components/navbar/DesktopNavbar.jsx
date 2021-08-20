import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  nav: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#212529',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  links: {
    margin: '10px',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  anchor: {
    textDecoration: 'none'
  }
}))

const DesktopNavbar = ({ navLinks }) => {
  const classes = useStyles()

  return (
    <>
      <Box display='flex' className={classes.nav} width='100%'>
        Ayodeji Oludiya
      </Box>
      {navLinks.map(({ url, text }) => (
        <a key={url} href={url} className={classes.anchor}>
          <Box key={text} className={`${classes.links}  ${classes.nav}`}>
            {text}
          </Box>
        </a>
      ))}
    </>
  )
}

export default DesktopNavbar
