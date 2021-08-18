import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import SocialLinks from './intro/SocialLinks'
import ingressiveLogo from '../assets/images/ingress.png'
import zuriLogo from '../assets/images/zuriIntership.svg'
import hngLogo from '../assets/images/hng.png'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '50px 0px 80px 0px',
    backgroundColor: '#f4f6f8',
    [theme.breakpoints.up('md')]: {
      padding: '50px 0px 80px 0px'
    }
  },
  imageBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  image: {
    padding: '30px 50px 0px 50px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '100%'
    }
  }
}))

const images = [
  {
    url: 'https://ingressive.org/',
    image: ingressiveLogo,
    alt: 'ingressive logo'
  },
  { url: 'https://internship.zuri.team/', image: zuriLogo, alt: 'zuri logo' },
  { url: 'https://hng.tech/', image: hngLogo, alt: 'hng logo' }
]

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box display='flex' flexDirection='column'>
        <Box
          display='flex'
          fontSize={40}
          fontWeight='fontWeightBold'
          justifyContent='center'
        >
          Ayodeji Oludiya
        </Box>
        <Box fontSize={30} display='flex' justifyContent='center'>
          Frontend Developer
        </Box>
        <Box fontSize={40} display='flex' justifyContent='center'>
          <SocialLinks />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Box className={classes.imageBox}>
            {images.map(({ url, image, alt }) => (
              <a
                key={url}
                className={classes.image}
                href={url}
                target='_blank'
                rel='noreferrer'
              >
                <img src={image} width='100%' height='100%' alt={alt} />
              </a>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
