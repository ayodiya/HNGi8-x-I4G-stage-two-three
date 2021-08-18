import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import hello from '../../assets/images/hello.svg'
import SocialLinks from './SocialLinks'
import { AiOutlineArrowRight } from 'react-icons/ai'

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
        <Box fontWeight='fontWeightBold'>I’m Ayodeji Oludiya</Box>
        <Box display='flex' fontSize={20}>
          Frontend Developer
        </Box>
        <SocialLinks />
        <Box>
          <Button
            className={classes.button}
            size='medium'
            variant='contained'
            color='primary'
            endIcon={<AiOutlineArrowRight />}
          >
            <Box fontWeight='fontWeightBold'> Get in Touch</Box>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Intro
