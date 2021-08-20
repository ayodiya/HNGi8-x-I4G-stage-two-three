import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  link: {
    color: 'black',
    marginRight: theme.spacing(1)
  }
}))
const SocialLinks = () => {
  const classes = useStyles()

  return (
    <Box pt={2} pb={2} data-aos='fade-up' data-aos-delay='200'>
      <a
        className={classes.link}
        href='https://www.linkedin.com/in/ayodiyah'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedin />
      </a>
      <a
        className={classes.link}
        href='https://www.twitter.com/ayodiyah'
        target='_blank'
        rel='noreferrer'
      >
        <FaTwitter />
      </a>
      <a
        className={classes.link}
        href='https://www.twitter.com/ayodiyah'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
    </Box>
  )
}

export default SocialLinks
