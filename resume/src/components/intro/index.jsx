import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import hello from '../../assets/images/hello.svg'
import SocialLinks from './SocialLinks'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: '#f4f6f8',
    paddingBottom: '50px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  imagePadding: {
    padding: '50px'
  },
  button: {
    borderRadius: '7px'
  },
  textBox: {
    fontSize: '30px',
    paddingLeft: '40px',
    [theme.breakpoints.up('md')]: {
      fontSize: '50px'
    }
  }
}))

const Intro = () => {
  const classes = useStyles()

  return (
    <Box className={classes.background}>
      <Box className={classes.imagePadding}>
        <img src={hello} alt='hello' width='100%' height='100%' />
      </Box>
      <Box className={classes.textBox}>
        <Box>Hello!</Box>
        <Box
          fontWeight='fontWeightBold'
          data-aos='fade-left'
          data-aos-delay='50'
        >
          I’m Ayodeji Oludiya
        </Box>
        <Box
          display='flex'
          fontSize={20}
          data-aos='fade-up'
          data-aos-delay='100'
        >
          Frontend Developer
        </Box>
        <SocialLinks />
      </Box>
    </Box>
  )
}

export default Intro
