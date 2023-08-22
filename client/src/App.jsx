import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CartPage from './components/cart/CartPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import DataProvider from './context/DataProvider';

import { Box, styled } from '@mui/system';
import DetailsView from './components/details/DetailsView';
import Footer from './components/footer/footer';




function App() {
  return (

    <DataProvider>
      <ToastContainer />

      <Router>
        <HeaderBox>
          <Header />
        </HeaderBox>

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path='/products/:id' element={<DetailsView />} />
          <Route path='/cart' element={<CartPage />} />

        </Routes>
        {/* <Footer /> */}
        <Footer />
      </Router>

    </DataProvider>

  );
}

export default App;

const HeaderBox = styled(Box)`
padding-bottom : 10px;
`