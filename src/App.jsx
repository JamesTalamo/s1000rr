
import HeadPage from "./pages/head/HeadPage"
import Page1 from "./pages/page1/Page1"
import Page2 from "./pages/page2/Page2"
import Page3 from "./pages/page3/Page3"
import Page4 from "./pages/page4/Page4"

function App() {
  return (
    <div className=' bg-white relative overflow-x-hidden'>
      <HeadPage />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      {/* <div className='w-screen h-dvh bg-black'></div> */}
    </div>
  )
}

export default App
