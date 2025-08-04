import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComp from './Sections/Global/Header/Navbar';
import PlayersComp from './Sections/Players/Players';
import HomeComp from './Sections/Home/Home';
import PageNotFound from './Sections/PageNotFound/PageNotFound';
import PaltanWorld from './Sections/PaltanWorld/PaltanWorld';
import Footer from './Sections/Global/Footer/Footer';
import SinglePlayer from './Sections/SinglePlayer/SinglePlayer';
import Gallery from './Sections/PaltanWorld/Gallery/Gallery';
import PaltanTv from './Sections/PaltanWorld/PaltanTv/PaltanTv';
import GalleryImages from './Sections/PaltanWorld/Gallery/GalleryImages';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route index element={<HomeComp />} />
          <Route path='/Players' element={<PlayersComp />} />
          <Route path="/player/:id" element={<SinglePlayer />}/>
          <Route path='/PaltanWorld' element={<PaltanWorld />} />
          <Route path='/PaltanTv' element={<PaltanTv />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path="/GImage/:id" element={<GalleryImages />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App
