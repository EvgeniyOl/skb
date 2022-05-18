import styles from './Phishman.module.css';
import phishman from './../PartnersLogo/phishman_logo.jpeg';

const Phishman = () => {
   return (
      <div className="container-lg">
         <div className="row justify-content-start m-5">
            <div className="col">
               <header className={styles.header}>
                  <h6>Главная--Партнеры--Phishman</h6>
                  <h1>Phishman</h1>
               </header>
            </div>
         </div>

            <hr />

         <div className="row justify-content-start">

               <div className="col-lg-4 col-sm-12 justify-content-center">
                  <img className={styles.body} src={phishman} alt="actlogo" />
               </div>

                <div className="col-lg-8 col-sm-12 ">
                <div>
                  <h4>Phishman — отечественный разработчик системы автомати-зированного упра-вления знаниями сотрудников в области кибер-безопасности</h4>
                  <p>Защищаем бизнес от кибератак на основе социальной инженерии</p>
                  <p>В системе Phishman мы объединили знания об инцидентах информационной безопасности и обучение сотрудников навыкам, которые позволяют повысить кибер­грамотность пользователей.</p>
                  <p>Наши технологии помогают выявить «уязвимых» сотрудников компаний и обучают их противостоять кибер­атакам. Платформа тренирует, тестирует и поддерживает уровень осведом­ленности коллектива на высоком уровне благодаря собственной базе курсов по кибербезопасности.</p>
               </div>
                </div>
         </div>
      </div>
   )
}
export default Phishman;