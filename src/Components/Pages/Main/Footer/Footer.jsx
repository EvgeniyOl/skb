import logo from './../../../../Assets/logo.png';
import card from './../images/card.png';
import styles from './Footer.module.css';


const Footer = () => {
   return(
      <div className="container-fluid bg-dark text-light m-auto justify-content-evenly">
         <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12">
               <div className={styles.footerlogo}>
                     <img src={logo} width='250px' alt="logoimg" />
                  </div>

                  <div>
                     <div className={styles.footerinfo}>
                        <strong>телефон офиса:</strong>
                        <p>+7 (3812) 53-20-18</p>
                        <p>+7 (3812) 37-75-50</p>
                     </div>

                        <br />

                     <div className={styles.footerinfo}>
                        <strong>телефон технической поддержки:</strong>
                        <p>+7 (3812) 37-72-97</p>
                     </div>

                        <br />

                     <div className={styles.footerinfo}>
                        <strong>ул. Ленина, д.20, (четвертый этаж), каб. 422, 423.</strong><br />
                        <strong>Остановка "Яблонька".</strong>
                     </div>
                  </div>
               </div>
            <div class="col-lg-6 col-sm-12 d-flex">
               <img  src={card} alt="card" width='650px'class="img-fluid" />
            </div>
         </div>
      </div>
   )
}
export default Footer;
