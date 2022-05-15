import { Accordion } from 'react-bootstrap';
import styles from './GeneralFive.module.css';

const GeneralFive = () => {
   return (
      <div class="container" className={styles.container}>
         <div className="row">
            <div className="col-12">
               <div class="col-12" className={styles.tittle}>
                  <h2 id='vacancy'>Вакансии <span>&</span> обучение</h2>
               </div>
            </div>
         </div>
         <Accordion className={styles.accordion} alwaysOpen>
            <Accordion.Item className={styles.accItem} eventKey="0">
               <Accordion.Header className={styles.accHeader} eventKey="0"><span>01</span> Специалист по реверс-инжинирингу</Accordion.Header>
               <Accordion.Body>
               <div className="container">
                     <div className="row col-12">
                              <div className="col-6">
                                 <h6>Требования:</h6>
                                 <ul>
                                    <li>высшееобразование(илистудентпоследнихкурсов) или среднее профессиональное образование.</li>
                                    <li>полныйрабочийдень(возможносовмещениес учебой).</li>
                                    <li>полнаязанятость.</li>
                                 </ul>
                              </div>
                              <div className="col-6">
                                 <h6>Навыки и опыт:</h6>
                                 <ul>
                                    <li>Знание нормативной базы в области ИБ (руководящие документы ФСТЭК РФ, ФСБ России) - не обязательно, но приветствуется; .</li>
                                    <li>Базовые знания сетевых технологий; .</li>
                                    <li>Базовые навыки администрирования ОС Windows и Linux - не обязательно, но приветствуется.</li>
                                    <li>Желателенопытработыссертифицированными средствами защиты информации.</li>
                                    <li>Желаниеразвиваться,получатьнеоценимыйопыт работы в области ИБ</li>
                                 </ul>
                              </div>
                        </div>
                     <div className="row col-12">
                        <div className="col-6">
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
                     <div className="row col-12">
                              <div className="col-6">
                                 <h6>Требования:</h6>
                                 <ul>
                                    <li>высшееобразование(илистудентпоследнихкурсов) или среднее профессиональное образование.</li>
                                    <li>полныйрабочийдень(возможносовмещениес учебой).</li>
                                    <li>полнаязанятость.</li>
                                 </ul>
                              </div>
                              <div className="col-6">
                                 <h6>Навыки и опыт:</h6>
                                 <ul>
                                    <li>Знание нормативной базы в области ИБ (руководящие документы ФСТЭК РФ, ФСБ России) - не обязательно, но приветствуется; .</li>
                                    <li>Базовые знания сетевых технологий; .</li>
                                    <li>Базовые навыки администрирования ОС Windows и Linux - не обязательно, но приветствуется.</li>
                                    <li>Желателенопытработыссертифицированными средствами защиты информации.</li>
                                    <li>Желаниеразвиваться,получатьнеоценимыйопыт работы в области ИБ</li>
                                 </ul>
                              </div>
                        </div>
                     <div className="row col-12">
                        <div className="col-6">
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
                        <div className="row col-12">
                                 <div className="col-6">
                                    <h6>Требования:</h6>
                                    <ul>
                                       <li>высшееобразование(илистудентпоследнихкурсов) или среднее профессиональное образование.</li>
                                       <li>полныйрабочийдень(возможносовмещениес учебой).</li>
                                       <li>полнаязанятость.</li>
                                    </ul>
                                 </div>
                                 <div className="col-6">
                                    <h6>Навыки и опыт:</h6>
                                    <ul>
                                       <li>Знание нормативной базы в области ИБ (руководящие документы ФСТЭК РФ, ФСБ России) - не обязательно, но приветствуется; .</li>
                                       <li>Базовые знания сетевых технологий; .</li>
                                       <li>Базовые навыки администрирования ОС Windows и Linux - не обязательно, но приветствуется.</li>
                                       <li>Желателенопытработыссертифицированными средствами защиты информации.</li>
                                       <li>Желаниеразвиваться,получатьнеоценимыйопыт работы в области ИБ</li>
                                    </ul>
                                 </div>
                           </div>
                        <div className="row col-12">
                           <div className="col-6">
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