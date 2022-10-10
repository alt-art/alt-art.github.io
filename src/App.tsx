import React from 'react'
import StyledBackground from './components/Background'
import Desc from './components/Desc'
import Footer from './components/Footer'
import Title from './components/Title'
import View from './components/View'

import 'react-alice-carousel/lib/alice-carousel.css'
import Social from './components/Social'
import { mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Slide from './components/Slide'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App (): JSX.Element {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <StyledBackground />
      <View arrow>
        <Title data-aos="fade-right">Pedro Mendes</Title>
        <Desc data-aos="fade-right">
          There are no challenges I don&apos;t want to solve with programming, as a
          Full-stack Web Developer or a Rust enthusiast.
        </Desc>
      </View>
      <View>
        <Title data-aos="fade-right">Projects</Title>
        <Slide />
      </View>
      <Footer>
        <Social label="alt-art" icon={mdiGithub} link="https://github.com/alt-art" />
        <Social
          label="Linkedin"
          icon={mdiLinkedin}
          link="https://www.linkedin.com/in/altart/"
        />
        <Social
          label="Email"
          icon={mdiEmail}
          link="mailto:pedromendescraft@gmail.com"
        />
      </Footer>
    </QueryClientProvider>
  )
}

export default App
