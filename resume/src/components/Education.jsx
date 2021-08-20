import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  background: {
    [theme.breakpoints.up('md')]: {
      padding: '40px 100px 100px 100px'
    }
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
    width: '80%',
    borderRadius: '10px',
    height: '200px',
    backgroundColor: '#f4f6f8',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '250px'
    }
  },
  workspace: {
    fontSize: '20x',
    padding: '25px',
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
    school: 'Free Code Camp, USA',
    degree: 'Fullstack Certificate in Web Development - April, 2020'
  },
  {
    school: 'Institute For Customer Relationship Management, Nigeria',
    degree: 'PGD in Customer Relationship Management - 2017'
  },
  {
    school: 'Obafemi Awolowo University, Nigeria',
    degree: 'Bachelor of Arts in English Language - 2014'
  }
]

const Education = () => {
  const classes = useStyles()

  return (
    <Box id='education' className={classes.background}>
      <Box className={classes.heading}>Education</Box>
      <Grid container justifyContent='center' alignItems='center' spacing={2}>
        {education.map(({ school, degree }) => (
          <Grid key={school} item xs={12} lg={6}>
            <Box
              display='flex'
              justifyContent='center'
              pt={8}
              // data-aos='zoom-in-up'
              // data-aos-delay='100'
              data-aos='flip-left'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='2000'
            >
              <Paper className={classes.paper} key={degree}>
                <Box className={classes.heading2}>
                  <Box>{school}</Box>
                </Box>
                <Box pt={1} className={classes.workspace}>
                  {degree}
                </Box>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Education
