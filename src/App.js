import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import { useMedia } from 'react-media-hook';

function  App() {
  const isSmallScreen = useMedia('(max-width:680px)')
  

  return (
    <body className='flex flex-col items-center pt-[60px] overflow-hidden'>
      <header className='w-[80%] flex justify-between'>
        <Navbar />
      </header>
      <main className='w-[80%] pt-24'>
        <Hero screen={isSmallScreen ? isSmallScreen.matches : false} />
      </main>
      <div className=' flex-col w-full bg-gray-200 mobile:h-[250vw] flex justify-center items-center'>
        <Statistics screen={isSmallScreen ? isSmallScreen.matches : false} />
      </div>
      <div className=' bg-gray-800 w-full'>
        <GetStarted/>
      </div>
      <div className='w-full'>
        <Footer/>
      </div>
    </body>
  );
}

export default App;
