import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <body className='flex flex-col items-center pt-[60px] '>
      <header className='w-[80%] flex justify-between'>
        <Navbar />
      </header>
      <main className='w-[80%] pt-24'>
        <Hero />
      </main>
      <div className=' flex-col w-full bg-gray-200 flex justify-center items-center'>
        <Statistics />
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
