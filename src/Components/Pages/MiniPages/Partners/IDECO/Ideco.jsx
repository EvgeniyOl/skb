import styles from './Ideco.module.css';
import ideco from './../PartnersLogo/ideco.jpeg';

const Ideco = () => {
   return (
      <div className="container-lg">
         <div className="row justify-content-start m-5">
            <div className="col">
               <header className={styles.header}>
                  <h6>Главная--Партнеры--«Айдеко»</h6>
                  <h1>«Айдеко»</h1>
               </header>
            </div>
         </div>

            <hr />

         <div className="row justify-content-start">

               <div className="col-lg-4 col-sm-12 justify-content-center">
                  <img className={styles.body} src={ideco} alt="actlogo" />
               </div>

                <div className="col-lg-8 col-sm-12 ">
                <div>
                  <h4>«Айдеко» — является российским производителем программных продуктов для фильтрации трафика, защиты сетей и развития сетевых инфраструктур любого уровня сложности. Наша миссия - создавать инновационные решения и сервис, нацеленный на долгосрочное партнерство.</h4>
                  <p>Айдеко является членом Ассоциации Разработчиков Программных Продуктов «Отечественный софт», некоммерческого партнерства «Руссофт», некоммерческого партнерства «Форум независимых разработчиков программного обеспечения» (ISDEF).</p>
                  <p>Флагманский продукт «Шлюз Безопасности Ideco UTM» — современное решение, основанное на ядре Linux и включающее в себя множество модулей собственной разработки компании.</p>
               </div>
                </div>
         </div>
      </div>
   )
}
export default Ideco;