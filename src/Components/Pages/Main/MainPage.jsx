import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../Main/logo/logo.png';

const MainPage = () => {
   return (
      <>
      <header>

         <div>
            <img src={logo} alt="Logo" width={'200px'} />
         </div>

         <div>
            <Link to='/Service'>Услуги</Link>
            <Link to='/Partners'>Партнеры</Link>
            <Link to='/CompanyInfo'>О нас</Link>
            <Link to='/Vacancy'>Вакансии</Link>
            <Link to='/Career'>Карьера</Link>
         </div>

      </header>
      </>
   )
}
export default MainPage;