import { Accordion } from 'react-bootstrap';
import Attestation from './Accordion/ChildAccordion/Attestacia/Attestation';
import styles from './GeneralSecond.module.css';

const GeneralSecond = () => {
   return (
      <div class="container" id='service' className={styles.container}>
            <div className="container">
               <div className="row justify-content-center text-light">
                  <h2 class='col-lg-6 col-sm-12 text-center'>Наши услуги</h2>
                  <p class='col-lg-6 col-sm-12 text-center'>Деятельность осуществляется на основании <br /> лицензий ФСБ и ФСТЭК России</p>
               </div>
            </div>

         <Accordion className={styles.accordion} alwaysOpen>
            <Accordion.Item className={styles.accItem} eventKey="0">
               <Accordion.Header className={styles.accHeader} eventKey="0"><span>01</span> Удостоверяющий центр</Accordion.Header>
               <Accordion.Body>
                  <Attestation />
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
               <Accordion.Header className={styles.accHeader}><span>02</span> Аудит безопасности информационных систем</Accordion.Header>
               <Accordion.Body>
                  <Attestation />
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
               <Accordion.Header className={styles.accHeader}><span>03</span> Аттестация объектов информатизации</Accordion.Header>
               <Accordion.Body>
                  <Attestation />
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
               <Accordion.Header className={styles.accHeader}><span>04</span> Внедрение средств защиты информации</Accordion.Header>
               <Accordion.Body>
                  <Attestation />
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
               <Accordion.Header className={styles.accHeader}><span>05</span> Импортозамещение и Linux-системы</Accordion.Header>
               <Accordion.Body>
                  <Attestation />
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
               <Accordion.Header className={styles.accHeader}><span>06</span> Криптографическая защита информации</Accordion.Header>
               <Accordion.Body>
                  <Attestation />
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
               <Accordion.Header className={styles.accHeader}><span>07</span> Поддержка и сопровождение субъектов КИИ</Accordion.Header>
               <Accordion.Body>
                  <Attestation />
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      </div>
   )
}
export default GeneralSecond;