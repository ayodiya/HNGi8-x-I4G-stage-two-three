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
    [theme.breakpoints.up('md')]: {
      fontSize: '30px'
    }
  },
  paper: {
    width: '80%',
    padding: '30px',
    borderRadius: '5px',
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
        <Paper className={classes.paper}>
          <Box className={classes.heading2}>FRONTEND DEVELOPER</Box>
          <Box pt={1} className={classes.workspace}>
            Epower | Nov, 2020 - April, 2021
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
