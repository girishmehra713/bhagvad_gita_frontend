import './App.css';
import Home from './Components/HomeComponent/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapterwithnavfooter from './Components/HomeComponent/Chapterwithnavfooter';
import ChapterDetails from './Components/ChapterComponent/ChapterDetails';
import VerseMainSection from './Components/VerseComponent/VerseMainSection';
import About from './Components/About Component/About';
import Shlok from './Components/ShlokComponent/Shlok';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route >
        <Route path="/Chapters" element={<Chapterwithnavfooter />}></Route>
        <Route path='/Chapters/:ChapterId' element={<ChapterDetails />}></Route>
        <Route path='/Chapters/:ChapterId/verse/:VerseId' element={<VerseMainSection />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Shloks' element={<Shlok />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
