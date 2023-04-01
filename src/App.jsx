import {Routes, Route } from 'react-router-dom';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Demande from './components/Demande/Demande';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './components/AppLayout/Header';
import Products from './components/Products/Products';
import Contact from './components/AppLayout/Contact';
import AppLayout from './components/AppLayout/AppLayout';
import Landing from './components/Products/Landing';

function App() {

  let router =
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Landing />} />
        <Route path='/filter/:type' element={<Products />} /> 
      </Route>
      <Route path='/contact' element={<Contact />} />
      <Route path= '/:id' element= {<Demande />} />
      <Route path= '/favorite' element= {<FavoritePage />} />
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
