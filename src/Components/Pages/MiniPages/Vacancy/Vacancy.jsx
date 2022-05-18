import React from 'react';
import styles from './Vacancy.module.css';
import komp from './../../../../Assets/komp.jpeg';

const Vacancy = () => {
   return (
      <div className="container-fluid">
         <div className="row">
          
              <div className={styles.headerBlock}>

                  <div className="row d-flex">
                     <div className="col-lg-6 text-center mt-5">
                        <h3>Работа в компании 'СКБ'</h3>
                        <p className='text-start m-5'>Приглашаем в команду специалистов.<br /> Пройдите собеседование,<br /> получите оффер и развивайтесь вместе с нами!</p>
                        <hr size={3} className={styles.line} />
                        <ul className={styles.list}>
                           <li>название учебного заведения, факультет, курс</li>
                           <li>сроки предполагаемой практики</li>
                           <li>средний балл за все время обучения</li>
                           <li>контактную информацию.</li>
                        </ul>
                        <a type='button' className={styles.button} href="mailto:info@ooo-skb.ru">
                           <span className={styles.button_linetop}></span>
                           <span className={styles.button_lineright}></span>
                           <span className={styles.button_linebottom}></span>
                           <span className={styles.button_lineleft}></span>
                           отправить резюме!
                        </a>
                     </div>
                     <div className="col-lg-6 text-center">
                        <img className={styles.monitor} src={komp} alt="monitorimg" />
                     </div>
                  </div>

              </div>
           
         </div>
      </div>
   )
}
export default Vacancy;