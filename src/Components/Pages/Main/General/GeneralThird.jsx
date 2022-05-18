import { Nav } from 'react-bootstrap';
import styles from './GeneralThird.module.css';
import esetlogo from './../../../../Components/Pages/MiniPages/Partners/PartnersLogo/ESETlogotip.png';
import phishman from './../../MiniPages/Partners/PartnersLogo/phishman_logo.jpeg';
import PositiveTechologies from './../../MiniPages/Partners/PartnersLogo/positive-tech-mte-belarus.jpeg';
import Fortinet from './../../MiniPages/Partners/PartnersLogo/kupit-fortinet-fortigate-apparatnye-resheniya-po-dostupnoy-tsene.jpeg';

const GeneralThird = () => {
   return (
      <div className="container" id='partners'>
         <div class="row" className={styles.row}>
            <div class="col-12" className={styles.partners} >
               <h3>Наши Партнеры</h3>
            </div>
            <div className="row">
               <div class="col-sm-3 mt-4">
                  <div class='card w-250 h-100'>
                        <img className={styles.cardimg} src={esetlogo} class="card-img-top" alt="..." />
                        <div class={styles.cardbody}>
                           <Nav.Link href="/Eset">ESET</Nav.Link>
                        </div>
                  </div>
               </div>
               <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100">
                     <img className={styles.cardimg} src={phishman} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Phishman">Phishman</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100">
                     <img className={styles.cardimg} src={PositiveTechologies} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Positivtechnologies">Positive Techologies</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100">
                     <img className={styles.cardimg} src={Fortinet} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Fortinet">Fortinet</Nav.Link>
                     </div>
               </div>
            </div>
            </div>
         </div>
         <Nav.Link href="/Partners" className={styles.linkPartners}>
            <a type='button' className={styles.button} href="/Partners">
               <span className={styles.button_linetop}></span>
               <span className={styles.button_lineright}></span>
               <span className={styles.button_linebottom}></span>
               <span className={styles.button_lineleft}></span>
                 Хочу посмотреть всех!
            </a>
         </Nav.Link>
      </div>
   )
}
export default GeneralThird;