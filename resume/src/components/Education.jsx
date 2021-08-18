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

const education = [
  {
    school: 'FREE CODE CAMP, USA',
    degree: 'Fullstack Certificate in Web Development - April, 2020'
  },
  {
    school: 'INSTITUTE FOR CUSTOMER RELATIONSHIP MANAGEMENT,NIGERIA',
    degree: 'PGD in Customer Relationship Management - 2017'
  },
  {
    school: 'OBAFEMI AWOLOWO UNIVERSITY, NIGERIA',
    degree: 'Bachelor of Arts in English Language - 2014'
  }
]

const Education = () => {
  const classes = useStyles()

  return (
    <Box id='education' className={classes.background}>
      <Box className={classes.heading}>Education</Box>
      {education.map(({ school, degree }) => (
        <Box key={school} display='flex' justifyContent='center' pt={8}>
          <Paper className={classes.paper} key={degree}>
            <Box className={classes.heading2}>{school}</Box>
            <Box pt={1} className={classes.workspace}>
              {degree}
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  )
}

export default Education
