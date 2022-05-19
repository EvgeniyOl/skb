import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../Main/images/logo.jpg';
import phonelogo from './../../../../Assets/free-icon-phone-receiver-5948915.png'
import telegramLogo from './../../Main/images/telegram.svg';
import styles from './NavBarHeader.module.css';


const NavBarHeader = () => {
   return (
      <Navbar collapseOnSelect expand="xl" bg="white">
         <Container className='justify-content-center'>
            <Navbar.Brand href="/">
               <img
               src={logo}
               width="250"
               height="100"
               className="d-inline-block align-top"
               alt="Company logo"
               />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
               <Nav className="justify-content-center">
                  <Nav.Link className={styles.link} href="/#service">Услуги</Nav.Link>
                  <Nav.Link className={styles.link} href="/#partners">Партнеры</Nav.Link>
                  <Nav.Link className={styles.link} href="/#companyInfo">О нас</Nav.Link>
                  <Nav.Link className={styles.link} href="/#vacancy">Вакансии</Nav.Link>
                  <Nav.Link className={styles.link} href="/#career">Карьера для студентов</Nav.Link>

                  <div>
                     <div className={styles.numberSite}>
                        <img src={phonelogo} alt="phoneimg" />
                        <a href="tel:+7 (3812) 53 20 18">+7 (3812) 53 20 18</a>
                     </div>

                     <div className={styles.email}>
                        <img src={telegramLogo} alt="sendimg" />
                        <a href="mailto:info@ooo-skb.ru" target="blank">skb.ru</a>
                     </div>
                  </div>
                     <Nav.Link className={styles.buttonLink} href="/Cost">
                        <span type='button' className={styles.button} >
                           <span className={styles.button_linetop}></span>
                           <span className={styles.button_lineright}></span>
                           <span className={styles.button_linebottom}></span>
                           <span className={styles.button_lineleft}></span>
                           Запросить стоимость
                        </span>
                     </Nav.Link> 

               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
export default NavBarHeader;