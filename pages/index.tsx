import type { NextPage } from 'next'
import Projects from '../Components/Projects/Projects'
import ZoomOut from '../Components/ZoomOut/Zoomout'



const Home: NextPage = () => {

  return (
    <main>
      <ZoomOut></ZoomOut>
      <div>
        <Projects></Projects>
      </div>
    </main>
    
  )
}

export default Home
