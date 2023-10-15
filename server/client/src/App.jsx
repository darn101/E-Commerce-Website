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
import Contact from './components/footer/about/Contact';
import About from './components/footer/about/AboutUs';
import Payments from './components/footer/help/payments';
import Shipping from './components/footer/help/shipping';
import Faq from './components/footer/help/faq';
import RefundPolicy from './components/footer/consumer-policy/RefundPolicy';
import Terms from './components/footer/consumer-policy/Terms';
import Privacy from './components/footer/consumer-policy/privacy';
import Success from './components/payments/success';
import Failed from './components/payments/failed';
import Category from './components/category/category';





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
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/refund-policy' element={<RefundPolicy />} />
          <Route path='/terms-of-use' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/success' element={<Success />} />
          <Route path='/failed' element={<Failed />} />
          <Route path='/category/:id' element={<Category />} />

        </Routes>
        {/* <Footer /> */}
        <FootBox>
          <Footer />
        </FootBox>

      </Router>

    </DataProvider>

  );
}

export default App;

const FootBox = styled(Box)`
margin-top : 1rem;
`

const HeaderBox = styled(Box)`
padding-bottom : 10px;
`