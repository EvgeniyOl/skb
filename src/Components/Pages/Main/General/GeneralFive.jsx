import { Accordion } from 'react-bootstrap';
import styles from './GeneralFive.module.css';

const GeneralFive = () => {
   return (
      <div class="container" className={styles.container} id='vacancy'>
         <div className="row">
            <div className="col">
               <div class="col" className={styles.tittle}>
                  <h2 id='vacancy'>Вакансии <span>&</span> обучение</h2>
               </div>
            </div>
         </div>
         <Accordion className={styles.accordion} alwaysOpen>
            <Accordion.Item className={styles.accItem} eventKey="0">
               <Accordion.Header className={styles.accHeader} eventKey="0"><span>01</span> Специалист по реверс-инжинирингу</Accordion.Header>
               <Accordion.Body>
               <div className="container">
                     <div className="row col justify-content-start">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                 <h6>Требования:</h6>
                                 <ul>
                                    <li>высшее образование(или студент последних курсов) или среднее профессиональное образование.</li>
                                    <li>полный рабочий день(возможно совмещение с учебой).</li>
                                    <li>полная занятость.</li>
                                 </ul>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                 <h6>Навыки и опыт:</h6>
                                 <ul>
                                    <li>Знание нормативной базы в области ИБ (руководящие документы ФСТЭК РФ, ФСБ России) - не обязательно, но приветствуется; .</li>
                                    <li>Базовые знания сетевых технологий; .</li>
                                    <li>Базовые навыки администрирования ОС Windows и Linux - не обязательно, но приветствуется.</li>
                                    <li>Желателен опыт работы с сертифицированными средствами защиты информации.</li>
                                    <li>Желание развиваться, получать неоценимый опыт работы в области ИБ</li>
                                 </ul>
                              </div>
                        </div>
                     <div className="row col">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <h6>Контакты:</h6>
                           <p>Шабанов Михаил Владимирович</p>
                           <p>mshabanov@ooo-skb.ru</p>
                           <p>+7 (3812) 53-20-18 , +7 (923) 677-17-61</p>
                        </div>
                     </div>
                     </div>
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
               <Accordion.Header className={styles.accHeader}><span>02</span> Специалист по информационной безопасности</Accordion.Header>
               <Accordion.Body>
                  <div className="container">
                     <div className="row col justify-content-start">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                 <h6>Требования:</h6>
                                 <ul>
                                    <li>высшее образование(или студент последних курсов) или среднее профессиональное образование.</li>
                                    <li>полный рабочий день(возможно совмещение с учебой).</li>
                                    <li>полная занятость.</li>
                                 </ul>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                 <h6>Навыки и опыт:</h6>
                                 <ul>
                                    <li>Знание нормативной базы в области ИБ (руководящие документы ФСТЭК РФ, ФСБ России) - не обязательно, но приветствуется; .</li>
                                    <li>Базовые знания сетевых технологий; .</li>
                                    <li>Базовые навыки администрирования ОС Windows и Linux - не обязательно, но приветствуется.</li>
                                    <li>Желателен опыт работы с сертифицированными средствами защиты информации.</li>
                                    <li>Желание развиваться, получать неоценимый опыт работы в области ИБ</li>
                                 </ul>
                              </div>
                        </div>
                     <div className="row col-12">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <h6>Контакты:</h6>
                           <p>Шабанов Михаил Владимирович</p>
                           <p>mshabanov@ooo-skb.ru</p>
                           <p>+7 (3812) 53-20-18 , +7 (923) 677-17-61</p>
                        </div>
                     </div>
                     </div>
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
               <Accordion.Header className={styles.accHeader}><span>03</span> Специалист по реверс-инжинирингу</Accordion.Header>
               <Accordion.Body>
                  <div className="container">
                        <div className="row col justify-content-start">
                                 <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h6>Требования:</h6>
                                    <ul>
                                       <li>высшее образование(или студент последних курсов) или среднее профессиональное образование.</li>
                                       <li>полный рабочий день(возможно совмещение с учебой).</li>
                                       <li>полная занятость.</li>
                                    </ul>
                                 </div>
                                 <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h6>Навыки и опыт:</h6>
                                    <ul>
                                       <li>Знание нормативной базы в области ИБ (руководящие документы ФСТЭК РФ, ФСБ России) - не обязательно, но приветствуется; .</li>
                                       <li>Базовые знания сетевых технологий; .</li>
                                       <li>Базовые навыки администрирования ОС Windows и Linux - не обязательно, но приветствуется.</li>
                                       <li>Желателен опыт работы с сертифицированными средствами защиты информации.</li>
                                       <li>Желание развиваться, получать неоценимый опыт работы в области ИБ</li>
                                    </ul>
                                 </div>
                           </div>
                        <div className="row col-12">
                           <div className="col-lg-6 col-md-6 col-sm-12">
                              <h6>Контакты:</h6>
                              <p>Шабанов Михаил Владимирович</p>
                              <p>mshabanov@ooo-skb.ru</p>
                              <p>+7 (3812) 53-20-18 , +7 (923) 677-17-61</p>
                           </div>
                        </div>
                        </div>
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      </div>
   )
}
export default GeneralFive;