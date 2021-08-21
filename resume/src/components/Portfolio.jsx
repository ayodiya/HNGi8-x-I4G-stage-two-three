import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import skicon from '../assets/images/skicon.png'
import grantmaster from '../assets/images/grantmaster.png'
import socialSugar from '../assets/images/socialSugar.png'
import photoperfects from '../assets/images/photoperfects.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  buttonLink: {
    color: 'blue',
    fontWeight: 'bold'
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    paddingBottom: '40px',
    paddingTop: '40px'
  },
  image: {
    objectFit: 'cover',
    height: '400px',
    width: '100%'
  },
  link: {
    textDecoration: 'none'
  },
  pageBox: {
    padding: '0px 50px 80px 50px',
    backgroundColor: '#f4f6f8',
    [theme.breakpoints.up('md')]: {
      padding: '50px 120px 80px 120px'
    }
  }
}))

const portItems = [
  { image: skicon, url: 'https://www.skiconnect.herokuapp.com' },
  { image: grantmaster, url: 'https://www.grantmaster.xyz' },
  { image: socialSugar, url: 'https://www.socialsugar.agency' },
  { image: photoperfects, url: 'https://www.photoperfects.com' }
]

const Portfolio = () => {
  const classes = useStyles()

  return (
    <>
      <Box
        id='portfolio'
        className={classes.pageBox}
        pl={20}
        pr={20}
        pb={10}
        data-aos='zoom-in-up'
        data-aos-duration='2000'
      >
        <Box className={classes.heading}>Portfolio</Box>
        <Grid container justifyContent='center' alignItems='center' spacing={2}>
          {portItems.map(({ image, url }) => (
            <Grid key={url} item xs={12} md={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.image}
                    component='img'
                    image={image}
                  />
                </CardActionArea>
                <CardActions>
                  <a
                    className={classes.link}
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Button
                      className={classes.buttonLink}
                      size='small'
                      color='primary'
                    >
                      Visit Website
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Portfolio
