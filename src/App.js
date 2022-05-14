import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/Pages/Main/MainPage';
import Service from './Components/Pages/MiniPages/Service/Service';
import Partners from './Components/Pages/MiniPages/Partners/Partners';
import CompanyInfo from './Components/Pages/MiniPages/CompanyInfo/CompanyInfo';
import Vacancy from './Components/Pages/MiniPages/Vacancy/Vacancy';
import Career from './Components/Pages/MiniPages/Сareer/Career';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Partners' element={<Partners />} />
          <Route path='/CompanyInfo' element={<CompanyInfo />} />
          <Route path='/Vacancy' element={<Vacancy />} />
          <Route path='/Career' element={<Career />} />
        </Routes>
    </>
  );
}

export default App;
