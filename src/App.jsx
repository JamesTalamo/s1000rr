
import Page1 from "./pages/page1/Page1"
import Page2 from "./pages/page2/Page2"
import Page3 from "./pages/page3/Page3"

function App() {
  return (
    <div className=' bg-white relative overflow-x-hidden'>
      <Page1 />
      <Page2 />
      <Page3 />
      <div className='w-screen h-dvh bg-black'></div>
    </div>
  )
}

export default App
