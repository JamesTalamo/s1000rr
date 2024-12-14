
import HeadPage from "./pages/head/HeadPage"
import Page1 from "./pages/page1/Page1"
import Page2 from "./pages/page2/Page2"
import Page3 from "./pages/page3/Page3"
import Page4 from "./pages/page4/Page4"
import Page5 from "./pages/page5/Page5"
import Page6 from "./pages/page6/Page6"
import SectionDivider from "./common/SectionDivider"


function App() {
  return (
    <div className=' bg-white relative overflow-x-hidden'>
      <HeadPage />
      <Page1 />
      <Page2 />
      <Page3 />
      <SectionDivider title={'HIGHLIGHTS OF THE SUPERBIKE'} />
      <Page5 />
      <Page4 />
      <SectionDivider title={'DESIGN IS MORE THAN JUST APPEARANCE'} />
      <Page6 />
    </div>
  )
}

export default App
