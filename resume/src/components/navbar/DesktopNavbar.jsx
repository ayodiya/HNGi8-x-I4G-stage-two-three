import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-scroll'

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
    textDecoration: 'none',
    cursor: 'pointer'
  }
}))

const DesktopNavbar = ({ navLinks }) => {
  const classes = useStyles()

  return (
    <>
      <Box display='flex' className={classes.nav} width='100%'>
        <Link to='top' smooth={true} duration={500} className={classes.anchor}>
          Ayodeji Oludiya
        </Link>
      </Box>
      {navLinks.map(({ url, text }) => (
        <Link
          key={url}
          to={url}
          smooth={true}
          duration={500}
          className={classes.anchor}
        >
          <Box key={text} className={`${classes.links}  ${classes.nav}`}>
            {text}
          </Box>
        </Link>
      ))}
    </>
  )
}

export default DesktopNavbar
