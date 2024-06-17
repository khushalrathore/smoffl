import Hero from "./Components/Sections/Hero"
import Trend from "./Components/Sections/Trend"
import Stats from "./Components/Sections/Stats"
import Blogs from "./Components/Sections/Blogs"

function App() {
  const blogInfo = {
    pfp1: 'https://yt3.googleusercontent.com/3gSdkQZN9zbBJQBAuq8zJ1AST5YVTveIFzjkYUUmEkvmKlumAjgI8kWzO58Uiwn0C9Ph_e3cXKE=s176-c-k-c0x00ffffff-no-rj',
    name1: 'Himanshu Kumawat',
    date1: 8,
    title1: 'Understanding the same shit twice',
    desc1: 'Revisiting footage can be tedious but essential in video editing. Each review uncovers new details, ensuring refined cuts and enhanced storytelling, ultimately perfecting the final production.',
    cover1: 'https://i.pinimg.com/736x/a4/16/a7/a416a7295fd5f7566161c18f2235a583.jpg',
    name2: 'Demo Name'
  }
  return (
    <>
      <Hero />
      <Stats />
      <Trend />
      <Blogs
        userName={blogInfo.name1}
        blogDate={blogInfo.date1}
        blogTitle={blogInfo.title1}
        blogDesc={blogInfo.desc1}
        userPfp={blogInfo.pfp1}
        blogCover={blogInfo.cover1}
      />
    </>
  )
}

export default App
