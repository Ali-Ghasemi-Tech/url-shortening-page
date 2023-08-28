import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <body className='flex flex-col items-center pt-[60px]'>
      <header className='w-[80%] flex justify-between'>
        <Navbar />
      </header>
      <main className='w-[80%] pt-24'>
        <Hero />
      </main>
    </body>
  );
}

export default App;
