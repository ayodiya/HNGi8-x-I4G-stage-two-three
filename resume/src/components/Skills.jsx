import Box from '@material-ui/core/Box'
import { DiJavascript1, DiReact } from 'react-icons/di'
import { SiMongodb, SiRedux, SiNextDotJs } from 'react-icons/si'
import { makeStyles } from '@material-ui/core/styles'

import expressjs from '../assets/icons/expressjs.svg'

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: '80px',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1)
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  }
}))

const Skills = () => {
  const classes = useStyles()

  return (
    <>
      <Box
        id='skills'
        display='flex'
        fontWeight='fontWeightBold'
        justifyContent='center'
        fontSize={50}
      >
        My Skills
      </Box>
      <Box pt={5} pb={5} display='flex' justifyContent='center'>
        <Box className={classes.iconBox}>
          <Box className={classes.icon}>
            <DiJavascript1 />
          </Box>
          <Box className={classes.icon}>
            <DiReact />
          </Box>
          <Box className={classes.icon}>
            <SiRedux />
          </Box>
          <Box className={classes.icon}>
            <SiMongodb />
          </Box>
          <Box className={classes.icon}>
            <img src={expressjs} alt='' width='90%' height='100%' />
          </Box>
          <Box className={classes.icon}>
            <SiNextDotJs />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Skills
