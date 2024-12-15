import { useState, useEffect } from 'react';
import HeadPage from "./pages/head/HeadPage";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";
import Page5 from "./pages/page5/Page5";
import Page6 from "./pages/page6/Page6";
import SectionDivider from "./common/SectionDivider";
import Page7 from "./pages/page7/Page7";
import TextSection from "./common/TextSection";
import Page8 from "./pages/page8/Page8";
import Carousel from "./pages/Carousel";

function App() {
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-white relative overflow-x-hidden'>
      <HeadPage />
      <Page1 />
      <Page2 />
      <Page3 />
      <SectionDivider title={'HIGHLIGHTS OF THE SUPERBIKE'} />
      <Page5 />

      {/* Conditionally render Carousel or Page4/Page8 based on screen size */}
      {isLgScreen ? <Carousel /> : <>
        <Page4 />
        <Page8 />
      </>}

      <SectionDivider title={'DESIGN IS MORE THAN JUST APPEARANCE'} />
      <Page6 />
      <TextSection />
      <Page7 />
    </div>
  );
}

export default App;

