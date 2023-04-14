import { Routes, Route, Navigate } from 'react-router-dom';
import Demande from './components/Demande/Demande';
import Header from './components/AppLayout/Header';
import Products from './components/Products/Products';
import Contact from './components/AppLayout/Contact';
import AppLayout from './components/AppLayout/AppLayout';
import Landing from './components/Products/Landing';
import Admin from './components/Admin/Admin'
import UpdateProduct from './components/Admin/UpdateProduct';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Landing />} />
          <Route path='/filter/:type' element={<Products />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/:id' element={<Demande />} />
        <Route path='/admin-cheik'>
          <Route index element={<Admin />} />
          {/* <Route path='update' element={<UpdateProduct />} /> */}
        </Route>
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
}
