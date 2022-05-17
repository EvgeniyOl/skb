import styles from './Eset.module.css';
import eset from './../PartnersLogo/ESETlogotip.png';

const Eset = () => {
   return (
      <div className="container-lg">
         <div className="row justify-content-start m-5">
            <div className="col">
               <header className={styles.header}>
                  <h6>Главная--Партнеры--ESET</h6>
                  <h1>ESET</h1>
               </header>
            </div>
         </div>

            <hr />

         <div className="row justify-content-start">

               <div className="col-lg-4 col-sm-12 justify-content-center">
                  <img className={styles.body} src={eset} alt="actlogo" />
               </div>

                <div className="col-lg-8 col-sm-12 ">
                <div>
                  <h4>ESET — международный разработчик антивирусных решений для дома и бизнеса.</h4>
                  <p>Компания основана в 1992 году. Главный офис находится в Братиславе, столице Словакии. 
                     Представительства компании открыты в 202 странах мира.
                     Компания ESET Russia работает с января 2005 года в России и СНГ. Нас выбирают уже более 15 млн пользователей.</p>
                  <p>Продукты ESET NOD32 стабильно получают высокие награды независимых вирусных лабораторий. 
                     В 2019 году эксперты «Роскачества» присудили второе место в рейтинге лучших домашних 
                     антивирусов нашему решению ESET NOD32 Internet Security и первое — ESET NOD32 Cyber Security Pro для macOS</p>
                  <p>Решения ESET NOD32 сертифицированы Федеральной службой по техническому и экспортному контролю (ФСТЭК России)
                     и могут быть использованы для защиты информационных систем обработки персональных данных до класса К1 
                     включительно (наивысшая степень надежности).</p>
                  <p>Более 250 компаний партнерской сети и 9 региональных представительств позволяют оперативно реагировать 
                     на запросы корпоративных клиентов. Нас выбирают Rambler&Co, телеканал СТС, АвтоВАЗ и другие ведущие компании в России и СНГ.</p>
               </div>
                </div>
         </div>
      </div>
   )
}
export default Eset;