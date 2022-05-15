import styles from './GeneralFirst.module.css';
import slide1 from './../../../../Assets/5elem_page_info_security.jpeg';
import slide3 from './../../../../Assets/full_dbGCToKq.jpeg';
import slide4 from './../../../../Assets/shutterstock_1381725578_1200.jpeg';
import { Carousel } from 'react-bootstrap';


const GeneralFirst = () => {
   return(
      <div className={styles.general}>
         <Carousel>
            <Carousel.Item className={styles.carouselItem}>
               <img className="d-block w-100" src={slide1} alt="First slide"/>
               <Carousel.Caption>
                  <p>Мы оказываем профессиоальые услуги в области комплексной информационной безпасности</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
               <img className="d-block w-100" src={slide3} alt="Third slide"/>
               <Carousel.Caption>
                  <p>Мы круче всех!!!</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
               <img className="d-block w-100" src={slide4} alt="Four slide"/>
               <Carousel.Caption>
                  <p>Мы топчик!!!</p>
               </Carousel.Caption>
            </Carousel.Item>
      </Carousel>

         <div className="container-lg">
            <div className="row">
               <div className="col12">

                  <div className="bg-dark text-light col-12">
                        <div className="row">
                           <div className="col-4"></div>

                           <div className="col-6">
                              <p className={styles.license}>Лицензия Управления Федеральной службы безопасности Российской Федерации по Омской области 
                                 на осуществление разработки, производства, распространения шифровальных (криптографических) средств, 
                                 информационных систем и телекоммуникационных систем, защищенных с использованием шифровальных (криптографических) средств, 
                                 выполнению работ, оказанию услуг в области шифрования информации, 
                                 техническому обслуживанию шифровальных (криптографических) средств, 
                                 информационных систем и телекоммуникационных систем, защищенных с использованием шифровальных (криптографических) средств.<br />
                                 Лицензия Федеральной службы по техническому и экспортному контролю на деятельность по технической защите конфиденциальной информации.
                              </p>
                           </div>
                           <div className="col-2"></div>
                        </div>
                        
                        <div className="row">
                           <div className="col-3"></div>
                           <div className="col-9">
                              <div className={styles.minicards1}>
                                 <div className={styles.card1}>
                                    <h6>Аттестация объектов информатизации</h6>
                                    <p>Специалисты ООО "СКБ" имеют высокую квалификацию и большой опыт работы по аттестации объектов информатизации.</p>
                                 </div>
                                 <div className={styles.card1}>
                                    <h6>Аудит безопасности информационных систем</h6>
                                    <p>Системный документированный процесс получения и оценки объективных данных о текущем состоянии системы.</p>
                                 </div>
                                 <div className={styles.card1}>
                                    <h6>Внедрение средств защиты информации</h6>
                                    <p>ООО "СКБ" является партнером всех основных поставщиков средств защиты информации.</p>
                                 </div>
                                 <div className={styles.card1}>
                                    <h6>Импортозамещение и Linux-системы</h6>
                                    <p>Группа компаний «СКБ» оказывает содействие и поддержку организациям в процессе импортозамещения и перехода на отечественное программное обеспечение.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                        <div className="row">
                           <div className="col-9">
                              <div className={styles.minicards2}>
                                 <div className={styles.card2}>
                                    <h6>Криптографическая защита информации</h6>
                                    <p>Для получения дополнительной информации Вы можете обратиться по телефону:<br /> +7 (3812) 37-72-97</p>
                                 </div>
                                 <div className={styles.card2}>
                                    <h6>Поддержка и сопровождение субъектов КИИ</h6>
                                    <p>Группа компаний «СКБ» является лицензиатом ФСТЭК России по обеспечению технической защиты конфиденциальной информации и ФСБ России по обеспечению защиты с помощью шифровальных средств</p>
                                 </div>
                                 <div className={styles.card2}>
                                    <h6>Аутсорсинг информационно-телекоммуникационных систем</h6>
                                    <p>Аутсорсинг...</p>
                                 </div>
                                 <div className={styles.card2}>
                                    <h6>Защита персональных данных</h6>
                                    <p>Защита ...</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-3"></div>
                        </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default GeneralFirst;