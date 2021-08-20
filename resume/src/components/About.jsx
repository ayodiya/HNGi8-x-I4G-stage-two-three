import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import myPic from '../assets/images/myPic.jpg'

const useStyles = makeStyles(theme => ({
  heading: {
    fontWeight: 'bold',
    fontSize: '20px',
    [theme.breakpoints.up('md')]: {
      fontSize: '30px'
    }
  },
  paragraph: {
    fontSize: '15px',
    textAlign: 'justify',
    paddingTop: '10px',
    [theme.breakpoints.only('md')]: {
      flexDirection: 'row',
      paddingRight: '70px',
      fontSize: '20px',
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      paddingRight: '70px',
      fontSize: '20px',
      width: '70%'
    }
  },
  pageBox: {
    padding: '30px 50px 50px 50px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.only('md')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '30px 150px 50px 150px'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
      padding: '30px 250px 50px 250px'
    }
  },
  image: {
    borderRadius: '20px',
    width: '100%',
    height: '100%'
  }
}))

const info = [
  { id: 1, title: 'Email:', content: 'devayodiya@gmail.com' },
  { id: 2, title: 'Phone:', content: '+2348106801274' },
  { id: 3, title: 'Address:', content: 'Ibadan, Nigeria' }
]

const About = () => {
  const classes = useStyles()

  return (
    <Box id='about' className={classes.pageBox}>
      <Box>
        <Box className={classes.heading}>Hello! I’m Ayodeji Oludiya.</Box>
        <Box>
          <Box className={classes.paragraph}>
            I aspire for a challenging position in a professional organization
            where I can enhance my professional skills and strengthen my
            performance in line with the organization’s goals. Myself a
            self-motivated achiever with an ability to plan and execute.
          </Box>
          <Box pt={4}>
            {info.map(({ id, title, content }) => (
              <Box key={id}>
                <Box className={classes.paragraph}>{title}</Box>
                <Box className={classes.heading}>{content}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box pt={5} width='100%' data-aos='fade-left' data-aos-delay='100'>
        <img className={classes.image} src={myPic} alt='profile pic' />
      </Box>
    </Box>
  )
}

export default About
