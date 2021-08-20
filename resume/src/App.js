import CssBaseline from '@material-ui/core/CssBaseline'
import { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import AOS from 'aos'
import Navbar from './components/navbar'
import Intro from './components/intro'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import 'aos/dist/aos.css'
import { theme } from './utils/theme'

function App () {
  useEffect(() => {
    AOS.init()
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <Footer />
    </ThemeProvider>
  )
}

export default App
