import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../Main/images/logo.jpg';
import phonelogo from './../../../../Assets/free-icon-phone-receiver-5948915.png'
import telegramLogo from './../../Main/images/telegram.svg';
import styles from './NavBarHeader.module.css';
import { HashLink as Links } from 'react-router-hash-link';



const NavBarHeader = () => {
   return (
      <div className={styles.headerFixed}>
            <Navbar collapseOnSelect expand="xl">
         <Container className='justify-content-center'>
            <Navbar.Brand href="/HomePage">
               <img
               src={logo}
               width="250"
               height="100"
               className="d-inline-block align-top"
               alt="Company logo"
               />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-center">
               <Nav className="justify-content-center align-items-center">
                  
                  <Nav.Link href='#'><Links className={styles.link} to="HomePage#service">Услуги</Links></Nav.Link>
                  <Nav.Link href='#'><Links className={styles.link} to="HomePage#partners">Партнеры</Links></Nav.Link>
                  <Nav.Link href='#'><Links className={styles.link} to="HomePage#companyInfo">О нас</Links></Nav.Link>
                  <Nav.Link href='#'><Links className={styles.link} to="HomePage#vacancy">Вакансии</Links></Nav.Link>
                  <Nav.Link href='#'><Links className={styles.link} to="HomePage#career">Карьера для студентов</Links></Nav.Link>

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
                     <Nav.Link className={styles.buttonLink} href="/HomePage/Cost">
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
      </div>
   )
}
export default NavBarHeader;