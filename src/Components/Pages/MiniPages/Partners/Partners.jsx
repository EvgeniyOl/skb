import React from 'react';
import esetlogo from './PartnersLogo/ESETlogotip.png';
import styles from './Partners.module.css';
import { Nav } from 'react-bootstrap';
import drweb from './PartnersLogo/DrWeb.png';
import phishman from './PartnersLogo/phishman_logo.jpeg';
import PositiveTechologies from './PartnersLogo/positive-tech-mte-belarus.jpeg';
import Code from './PartnersLogo/code.jpeg';
import Cbi from './PartnersLogo/cbi.jpeg';
import ideco from './PartnersLogo/ideco.jpeg';
import Okb from './PartnersLogo/okb.png';
import Activsoft from './PartnersLogo/active.png';
import Gasinformservice from './PartnersLogo/gas.png';
import Trukonf from './PartnersLogo/trueconf-logo.png';
import Fortinet from './PartnersLogo/kupit-fortinet-fortigate-apparatnye-resheniya-po-dostupnoy-tsene.jpeg';

const Partners = () => {
   return (
      <>
      <div className="container">
         <div class="row">
            <div class="col-sm-3 mt-4">
               <div class='card w-250 h-100 d-flex justify-content-center'> 
                     <img className={styles.cardimg} src={esetlogo} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Eset">ESET</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={drweb} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/DRWEB">Dr.WEB</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={phishman} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Phishman">Phishman</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={PositiveTechologies} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Positivtechnologies">Positive Techologies</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={Code} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Code">"?????? ????????????????????????"</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={Cbi} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Cbi">"??????-????????????"</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={ideco} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/IDECO">IDECO</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={Okb} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Okb">"?????? ????????"</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={Activsoft} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Activsoft">"??????????-????????"</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={Gasinformservice} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Gasinformservice">"??????????????????????????????"</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={Trukonf} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Trukonf">"??????????????"</Nav.Link>
                     </div>
               </div>
            </div>
            <div class="col-sm-3 mt-4">
               <div class="card w-250 h-100 d-flex justify-content-center">
                     <img className={styles.cardimg} src={Fortinet} class="card-img-top" alt="..." />
                     <div class={styles.cardbody}>
                        <Nav.Link href="/Partners/Fortinet">Fortinet</Nav.Link>
                     </div>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}
export default Partners;