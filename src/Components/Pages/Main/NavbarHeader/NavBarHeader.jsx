import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../Main/images/logo.jpg';
import phonelogo from './../../../../Assets/free-icon-phone-receiver-5948915.png'
import telegramLogo from './../../Main/images/telegram.svg';
import styles from './NavBarHeader.module.css';
import { Link } from 'react-router-dom';


const NavBarHeader = () => {
   return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="white">
         <Container>
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
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link className={styles.link} href="/#service">Услуги</Nav.Link>
                  <Nav.Link className={styles.link} href="/#partners">Партнеры</Nav.Link>
                  <Nav.Link className={styles.link} href="/#companyInfo">О нас</Nav.Link>
                  <Nav.Link className={styles.link} href="/#vacancy">Вакансии</Nav.Link>
                  <Nav.Link className={styles.link} href="/#career">Карьера для студентов</Nav.Link>
               </Nav>
            </Navbar.Collapse>
            <div className={styles.contacts}>

               <div class="row" className={styles.numberSite}>
                  <img src={phonelogo} alt="phoneimg" />
                  <a href="tel:+7 (3812) 53 20 18">+7 (3812) 53 20 18</a>
               </div>

               <div class="row" className={styles.email}>
                  <img src={telegramLogo} alt="sendimg" />
                  <a href="mailto:info@ooo-skb.ru" target="blank">skb.ru</a>
               </div>
            </div>
            <Nav.Link href="/Cost">
            <button type='button' class='btn btn-outline-danger' >Запросить стоимость</button>
         </Nav.Link>
         </Container>
      </Navbar>
      <hr size='3' width="100%" />
      </>
   )
}
export default NavBarHeader;