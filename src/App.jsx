import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './components/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Contact from './components/Contact';
import AppLayout from './components/AppLayout/AppLayout';
import Landing from './components/Landing';
function App() {
  let router =
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Landing />} />
        <Route path='/filter/:type' element={<Products />} /> 
      </Route>
      <Route path='/contact' element={<Contact />} />
      <Route path= '/:id' element= {<Details />} />
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
