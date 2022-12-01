import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import ProductPage from './pages/Product/Product';
import IndexPage from './pages/Index/IndexPage';
import RegistrationPage from './pages/Registration/Registration';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<DefaultLayout/>}>
        <Route index element={<IndexPage/>} />
        <Route path={'Contacts'} element={<RegistrationPage/>} />
        <Route path={'products'}>
        <Route path={':userId'} element={<ProductPage/>} />
        </Route>
      </Route>
    </Routes>  
  );
}

export default App;
