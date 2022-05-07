import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import Sponsors from './components/Sponsors/Sponsors';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/sponsors' element={<Sponsors></Sponsors>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
