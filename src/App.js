
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';

import './App.css';


function App() {
  
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
