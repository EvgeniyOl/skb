import styles from './GeneralSix.module.css';
import student from './../../../../Assets/mark-zuckerberg-harvard.jpeg';
import { Nav } from 'react-bootstrap';

const GeneralSix = () => {
   return(
      <div class="container-lg" id='career'>
         <div className="row col">
            <div className="col justify-content-center">
               <h2 className='text-center'>Начало карьеры для<br />студентов следующих<br />специальностей</h2>
            </div>
         </div>

         <div className="row justify-content-center m-5" >
            <div class="col-lg-4 col-md-6 col-sm-12">
               <ul>
                  <li>компьютерная безопасность</li>
                  <li>информационная безопасность</li>
                  <li>информационная безопасность<br /> автоматизированных систем</li>
                  <li>сетевоеисистемное администрирование</li>
                  <li>безопасность информационных технологий<br /> в правоохранительной сфере</li>
                  <li>инфокоммуникационные технологии и системы связи</li>
               </ul>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 text-center">
               <img className={styles.student} src={student} alt="studentimg" />
            </div>
         </div>
         <div class="row justify-content-start d-flex" className={styles.tasks}>
            <div class="col-lg-6 col-sm-12">
               <h4>Мы предлагаем:</h4>
               <p>большое разнообразие выполняемых задач<br /> опыт решения задач на действующих объектах<br /> возможность развития и самореализации<br /> возможность дальнейшего трудоустройства</p>
            </div>
            <div class="col-lg-6 col-sm-12">
               <Nav.Link href='/Vacancy'>
                  <div className={styles.neonicondiv}>
                        <span className={styles.neonicon}>Отправить<br /> заявку</span>
                  </div>
               </Nav.Link>
            </div>
         </div>
         <div class="row justify-content-start">
            <h4>Требования:</h4>
            <p>желание учиться и развиваться - любознательность и трудолюбие - ответственность и коммуникабельность - желание получить опыт и перспективную работу</p>
         </div>
      </div>
   )
}
export default GeneralSix;