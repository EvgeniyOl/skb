import styles from './Cbi.module.css';
import cbi from './../PartnersLogo/cbi.jpeg';

const Cbi = () => {
   return (
      <div className="container-lg">
         <div className="row justify-content-start m-5">
            <div className="col">
               <header className={styles.header}>
                  <h6>Главная--Партнеры--«ЦБИ-сервис»</h6>
                  <h1>«ЦБИ-сервис»</h1>
               </header>
            </div>
         </div>

            <hr />

         <div className="row justify-content-start">

               <div className="col-lg-4 col-sm-12 justify-content-center">
                  <img className={styles.body} src={cbi} alt="actlogo" />
               </div>

                <div className="col-lg-8 col-sm-12 ">
                <div>
                  <h4>АО «ЦБИ-сервис» является одной из ведущих компаний России, специализирующихся в области обеспечения безопасности информационных технологий.</h4>
                  <p>Акционерное общество (АО) «ЦБИ-сервис» создано в 2000г. Деятельность в области защиты информации является основным видом деятельности АО «ЦБИ-сервис»</p>
                  <p>АО «ЦБИ-сервис» обеспечивает возможность комплексного снабжения Заказчиков всем необходимым для создания защищенных автоматизированных систем, с одновременным предоставлением услуг по инсталляции, настройке и администрированию программных средств, обучению персонала и технической поддержке в режиме «горячей линии».</p>
                  <p>Наряду с поставками покупных средств защиты информации в АО «ЦБИ-сервис» организован выпуск продукции собственного производства. В число такой продукции входят программные средства контроля защищенности, ПЭВМ в защищенном исполнении и другие средства защиты.</p>
                  <p>Данные работы выполняются АО «ЦБИ-сервис» на основании соответствующих лицензий и аттестатов аккредитации ФСТЭК России, ФСБ России и др. государственных органов.</p>
                  <p>Среди Заказчиков АО «ЦБИ-сервис» более 100 организаций, наиболее известными из них являются: ФСТЭК России, Государственный таможенный комитет Российской Федерации, Федеральная служба охраны Российской Федерации, подразделения МВД России, организации и подразделения МО РФ, ОАО РЖД и его структурные подразделения, Администрации районов Московской области и других административных образований России, Банк России и его структурные подразделения, Министерства финансов Московской области и его структурные подразделения, другие предприятия и организации различных организационно-правовых форм.</p>
               </div>
                </div>
         </div>
      </div>
   )
}
export default Cbi;