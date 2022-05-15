import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../Main/images/logo.png';
import telegramLogo from './../../Main/images/telegram.svg';
import styles from './NavBarHeader.module.css';

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
                  <Nav.Link href="/#service">Услуги</Nav.Link>
                  <Nav.Link href="/#partners">Партнеры</Nav.Link>
                  <Nav.Link href="/CompanyInfo">О нас</Nav.Link>
                  <Nav.Link href="/Vacancy">Вакансии</Nav.Link>
                  <Nav.Link href="/Career">Карьера для студентов</Nav.Link>
               </Nav>
            </Navbar.Collapse>
            <div className={styles.contacts}>
               <div className={styles.numberSite}>
                  <p>8 3812 53 20 18</p>
                  <a href="info@ooo-skb.ru" target="blank">info@ooo-skb.ru</a>
               </div>
               <img className={styles.sendLogo} src={telegramLogo} alt="sendimg" />
            </div>
            <Button variant="dark link" href="/Cost">Запросить стоимость</Button>{' '}
         </Container>
      </Navbar>
      <hr size='3' width="100%" />
      </>
   )
}
export default NavBarHeader;