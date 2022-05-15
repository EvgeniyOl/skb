import styles from './GeneralSix.module.css';

const GeneralSix = () => {
   return(
      <div class="container" className={styles.container} id='career'>
         <div className="row col-12">
            <div className="col-3"></div>
            <div className="col-3">
               <h2 className={styles.tittle1}>Начало карьеры для</h2>
               <h2 className={styles.tittle2}>студентов следующих</h2>
               <h2 className={styles.tittle3}>специальностей</h2>
            </div>
         </div>
         <div className="row col-12" >
            <div className="col-3"></div>
            <div class="col-4">
               <ul>
                  <li>компьютерная безопасность</li>
                  <li>информационная безопасность</li>
                  <li>информационная безопасность<br /> автоматизированных систем</li>
                  <li>сетевоеисистемное администрирование</li>
                  <li>безопасность информационных технологий<br /> в правоохранительной сфере</li>
                  <li>инфокоммуникационные технологии и системы связи</li>
               </ul>
            </div>
         </div>
         <div class="row col-12" className={styles.tasks}>
            <div class="col-5" className={styles.top}>
               <h4>Мы предлагаем:</h4>
               <p>большое разнообразие выполняемых задач<br /> опыт решения задач на действующих объектах<br /> возможность развития и самореализации<br /> возможность дальнейшего трудоустройства</p>
            </div>
            <div class="col-7" className={styles.right}>
               <div className={styles.redButton}>
                  Отправить<br /> заявку
               </div>
            </div>
         </div>
         <div class="row col-12" className={styles.bot}>
            <h4>Требования:</h4>
            <p>желание учиться и развиваться - любознательность и трудолюбие - ответственность и коммуникабельность - желание получить опыт и перспективную работу</p>
         </div>
      </div>
   )
}
export default GeneralSix;