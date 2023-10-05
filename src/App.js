import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';

function App() {
  return (
    <body className='flex flex-col items-center pt-[60px] pb-20'>
      <header className='w-[80%] flex justify-between'>
        <Navbar />
      </header>
      <main className='w-[80%] pt-24'>
        <Hero />
      </main>
      <div className=' flex-col w-full bg-gray-200 flex justify-center items-center'>
        <Statistics />
      </div>
    </body>
  );
}

export default App;
