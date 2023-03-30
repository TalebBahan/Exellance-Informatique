import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './components/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Contact from './components/contact/Contact';
import AppLayout from './components/AppLayout/AppLayout';


function App() {
  let router =
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='/filter/:type' element={<Products />} /> 
      </Route>
      <Route path='/contact' element={<Contact />} />
      <Route path= '/:id' element= {<Details />} />
      <Route path= '/favorite' element= {<FavoritePage />} />
      <Route path= '/basket' element= {<Basket />} />
      {/* <Route path= '*' element={<Navigate to={'/'}/>} /> */}
    </Routes>

  return (
    <ContextProvider>
      <ContextFilter>
        <Header />
        {router}
      </ContextFilter>
    </ContextProvider>
  );
}

export default App;
