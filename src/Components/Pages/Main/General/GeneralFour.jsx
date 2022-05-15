import styles from './GeneralFour.module.css';
import dir from './../../../../Assets/collectiv/father.jpeg';
import mns from './../../../../Assets/collectiv/hova.jpeg';
import bux from './../../../../Assets/collectiv/bux.jpeg';
import hr from './../../../../Assets/collectiv/hr.jpeg';
import ilon from './../../../../Assets/collectiv/ilon.jpeg';

const GeneralFour = () => {
   return (
      <div className="container">
         <div class="row" className={styles.people}>
            <div className="col-12">
               <h3>Наши Сотрудники</h3>
            </div>
            <div class="row">
               <div class="col-sm-3 mt-4">
                  <div class='card'>
                     <h5 className={styles.cardTittle}>Patron</h5>
                     <img className={styles.cardImg} src={dir} alt="..." />
                     <p className={styles.citata}>"Ты пришёл и говоришь: Дон Корлеоне, мне нужна справедливость. Но ты просишь без уважения, ты не предлагаешь дружбу, ты даже не назвал меня крёстным отцом."</p>
                  </div>
               </div>
               <div class="col-sm-3 mt-4">
                  <div class='card'>
                     <h5 className={styles.cardTittle}>Начальник отдела</h5>
                     <img className={styles.cardImg} src={ilon} alt="..." />
                     <p className={styles.citata}>«С искусственным интеллектом нужно быть очень осторожным. Я все больше склоняюсь к тому, что нам необходим обязательный контроль, возможно международном уровне. Играя с искусственным интеллектом, мы призываем демона»</p>
                  </div>
               </div>
               <div class="col-sm-3 mt-4">
                  <div class='card'>
                     <h5 className={styles.cardTittle}>Главный бухгалтер</h5>
                     <img className={styles.cardImg} src={bux} alt="..." />
                     <p className={styles.citata}>Все средства хороши, кроме безналичных.</p>
                  </div>
               </div>
               <div class="col-sm-3 mt-4">
                  <div class='card'>
                     <h5 className={styles.cardTittle}>"Стажер"</h5>
                     <img className={styles.cardImg} src={mns} alt="..." />
                     <p className={styles.citata}>Чтобы отыскать баг, ты должен мыслить, как баг!</p>
                  </div>
               </div>
               <div class="col-sm-3 mt-4">
                  <div class='card'>
                     <h5 className={styles.cardTittle}>HR</h5>
                     <img className={styles.cardImg} src={hr} alt="..." />
                     <p className={styles.citata}>Не задерживаемся после 18, не ругаемся, помогаем во всем, руководитель — пуська.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default GeneralFour;