import styles from './GeneralFirst.module.css';
import slide1 from './../../../../Assets/5elem_page_info_security.jpeg';
import slide3 from './../../../../Assets/full_dbGCToKq.jpeg';
import slide4 from './../../../../Assets/shutterstock_1381725578_1200.jpeg';
import { Carousel } from 'react-bootstrap';


const GeneralFirst = () => {
   return(
      <div className={styles.general}>
         <div className={styles.carouselMedia}>
            <Carousel className={styles.carousel}>
               <Carousel.Item className={styles.carouselItem}>
                  <img className="d-block w-100" src={slide1} alt="First slide"/>
                  <Carousel.Caption className={styles.caption}>
                     <p className={styles.p}>Что такое MITM-Атака<br />(атака 'человек посередине')</p>
                     <a href="/News1">Читать</a>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item className={styles.carouselItem}>
                  <img className="d-block w-100" src={slide3} alt="Third slide"/>
                  <Carousel.Caption className={styles.caption}>
                     <p className={styles.p}>Все большую популярность на хакерских форумах приобретает новое вредоносное ПО для похищения информации BlackGuard.</p>
                     <a href="/News2">Читать</a>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item className={styles.carouselItem}>
                  <img className="d-block w-100" src={slide4} alt="Four slide"/>
                  <Carousel.Caption className={styles.caption}>
                     <p className={styles.p}>Новое вымогательское ПО, написанное на языке программирования Python, атакует среды, где используется Jupyter Notebook.</p>
                     <a href="/News3">Читать</a>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </div>

         <div className="container-fluid">
            <div className="row">
               <div className="col p-0">

                  <div className="bg-dark text-light col-12 mt-5">
                        <div className="row justify-content-center mb-5">
                           <div className="col-xl-4 col-lg-4 col-sm-12">
                              <h2 class='text-center'>Почему выбирают нас?</h2>
                              <ul>Основные направления деятельности компании:
                                 <li>Информационные системы</li>
                                 <li>Телекоммуникационные системы</li>
                                 <li>Информационная безопасность</li>
                                 <li>Инженерно-технические системы охраны</li>
                              </ul>
                              <h5 class='text-center'>Работаем с 5 февраля 2009г</h5>
                           </div>
                        </div>
                        
                        <div className={styles.none860}>
                        <div class="row justify-content-end">
                           <div className="col-xl-8 col-lg-8 col-sm-12 d-flex justify-content-end">
                              
                                 <div class='col' className={styles.card}>
                                    <p className={styles.cardTittle}>Аттестация объектов информатизации</p>
                                    <p className={styles.cardBody}>Специалисты ООО "СКБ" имеют высокую квалификацию и большой опыт работы по аттестации объектов информатизации.</p>
                                 </div>
                                 <div class='col' className={styles.card}>
                                    <p className={styles.cardTittle}>Аудит безопасности информационных систем</p>
                                    <p className={styles.cardBody}>Системный документированный процесс получения и оценки объективных данных о текущем состоянии системы.</p>
                                 </div>
                                 <div class='col' className={styles.card}>
                                    <p className={styles.cardTittle}>Внедрение средств защиты информации</p>
                                    <p className={styles.cardBody}>ООО "СКБ" является партнером всех основных поставщиков средств защиты информации.</p>
                                 </div>
                                 <div class='col' className={styles.card}>
                                    <p className={styles.cardTittle}>Импортозамещение и Linux-системы</p>
                                    <p className={styles.cardBody}>Группа компаний «СКБ» оказывает содействие и поддержку организациям в процессе импортозамещения и перехода на отечественное программное обеспечение.</p>
                                 </div>

                           </div>
                        </div>
                        
                        <div className="row justufy-content-start mt-5">
                           <div className="col-xl-8 col-lg-8 col-sm-12 d-flex justufy-content-start">
                              
                                 <div className={styles.card}>
                                    <p className={styles.cardTittle}>Криптографическая защита информации</p>
                                    <p className={styles.cardBody}>Для получения дополнительной информации Вы можете обратиться по телефону:<br /> +7 (3812) 37-72-97</p>
                                 </div>
                                 <div className={styles.card}>
                                    <p className={styles.cardTittle}>Поддержка и сопровождение субъектов КИИ</p>
                                    <p className={styles.cardBody}>Группа компаний «СКБ» является лицензиатом ФСТЭК России по обеспечению технической защиты конфиденциальной информации и ФСБ России по обеспечению защиты с помощью шифровальных средств</p>
                                 </div>
                                 <div className={styles.card}>
                                    <p className={styles.cardTittle}>Аутсорсинг информационно-телекоммуникационных систем</p>
                                    <p className={styles.cardBody}>Аутсорсинг...</p>
                                 </div>
                                 <div className={styles.card}>
                                    <p className={styles.cardTittle}>Защита персональных данных</p>
                                    <p className={styles.cardBody}>Защита ...</p>
                                 </div>
                              
                           </div>
                        </div>

                        </div>
                       
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default GeneralFirst;