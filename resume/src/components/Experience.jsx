import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  background: {
    paddingTop: '40px',
    paddingBottom: '100px'
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '40px',
    fontWeight: 'bold'
  },
  heading2: {
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: '10px  20px  10px 20px',
    [theme.breakpoints.up('md')]: {
      fontSize: '30px'
    }
  },
  paper: {
    backgroundColor: '#f4f6f8',
    width: '80%',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
      width: '40%'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  workspace: {
    [theme.breakpoints.up('md')]: {
      fontSize: '25px'
    }
  },
  workDone: {
    padding: '30px',
    [theme.breakpoints.up('md')]: {
      fontSize: '20px'
    }
  }
}))

const Experience = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Box id='experience' className={classes.background}>
      <Box className={classes.heading}>Work Experience</Box>
      <Box display='flex' justifyContent='center' pt={8}>
        <Paper
          className={classes.paper}
          data-aos='zoom-in-up'
          data-aos-delay='100'
        >
          <Box className={classes.heading2}>
            <Box>Frontend Developer</Box>
            <Box
              pt={1}
              className={classes.workspace}
              fontWeight='fontWeightRegular'
              fontStyle='italic'
            >
              Epower | Nov, 2020 - April, 2021
            </Box>
          </Box>
          <Box className={classes.workDone}>
            <Box>{bull} Implement designs by UX/UI designer.</Box>
            <Box>{bull} Connected websites to API.</Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default Experience
