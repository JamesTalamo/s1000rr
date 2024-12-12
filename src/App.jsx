

import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"

function App() {
  return (
    <div className=' bg-white relative overflow-x-hidden'>
      <Page1 />
      <Page2 />
      <Page3 />
      <div className='w-screen h-dvh bg-red-500'></div>
    </div>
  )
}

export default App
