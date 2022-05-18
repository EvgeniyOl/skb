import styles from './Code.module.css';
import code from './../PartnersLogo/code.jpeg';

const Code = () => {
   return (
      <div className="container-lg">
      <div className="row justify-content-start m-5">
         <div className="col">
            <header className={styles.header}>
               <h6>Главная--Партнеры--Код Безопасности</h6>
               <h1>Код Безопасности</h1>
            </header>
         </div>
      </div>

         <hr />

      <div className="row justify-content-start">

            <div className="col-lg-4 col-sm-12 justify-content-center">
               <img className={styles.body} src={code} alt="actlogo" />
            </div>

             <div className="col-lg-8 col-sm-12 ">
             <div>
               <h4>Мы — единственная компания на российском рынке, которая может с помощью собственных продуктов обеспечить полную защиту базовой ИТ-инфраструктуры: конечных станций и серверов, периметра сети, современных виртуальных инфраструктур и мобильных устройств.</h4>
               <h3>Андрей ГоловГенеральный директор «Кода Безопасности»</h3>
               <p>Наши продукты сертифицированы ФСТЭК и ФСБ</p>
               <p>Мы всегда на связи с клиентом и готовы к новым предложениям</p>
               <p>Широкая линейка СЗИ охватывает все уровни инфраструктурной безопасности</p>
               <p>Интегрированные между собой продукты составляют единую экосистему безопасности</p>
               <p>По всей России действует техническая поддержка</p>
            </div>
             </div>
      </div>
   </div>
   )
}
export default Code;