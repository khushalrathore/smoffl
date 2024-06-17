import Hero from "./Components/Sections/Hero"
import Trend from "./Components/Sections/Trend"
import Stats from "./Components/Sections/Stats"
import Blogs from "./Components/Sections/Blogs"
import Recents from "./Components/Sections/Recents"
import PreFooter from "./Components/Sections/PreFooter"

function App() {
  const blogInfo = {
    first: {
      date: 8
    }
  }
  return (
    <>
      <Hero />
      <Stats />
      <Trend />
      <Blogs blogDate={blogInfo.first.date} />
      <Recents />
      <PreFooter />
    </>
  )
}

export default App
