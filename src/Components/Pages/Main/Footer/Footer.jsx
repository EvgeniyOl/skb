import { Col, Row } from "react-bootstrap";
import logo from './../images/logo.png';
import card from './../images/card.png';
import styles from './Footer.module.css';

const Footer = () => {
   return(
      <>
      <div className={styles.footerblock}>
         <div className="bg-dark text-light container-fluid">
            <Row>
               <Col>
                  <div className={styles.footerlogo}>
                     <img src={logo} width='250px' alt="logoimg" />
                  </div>

                  <div>
                     <div className={styles.footerinfo}>
                        <strong>телефон офиса:</strong>
                        <p>+7 (3812) 53-20-18</p>
                        <p>+7 (3812) 37-75-50</p>
                        #212529 color
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
               </Col>
                  
               <Col className={styles.card}>
                  <img src={card} alt="card" width='650px' />
               </Col>
            </Row>
         </div>
      </div>
      </>
   )
}
export default Footer;