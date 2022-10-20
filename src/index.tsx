import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header' ;
import Footer from './components/Footer';
import { render } from "react-dom";
import { BrowserRouter,
         Routes, 
         Route, 
       } from 'react-router-dom';
import Shop from './Pages/Shop';
import Booking from './Pages/Booking';
import Layout from './components/Layout';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout>- <App /> </Layout>} />
      <Route path="booking" element={<Layout> <Booking /> </Layout>} />
      <Route path="shop" element={<Layout> <Shop /> </Layout>} />
      
      <Route
      path="*"
      element={
        <main className='text-black text-bold'>
          <p>There's nothing here!</p>
        </main>
      }
    />
    
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
