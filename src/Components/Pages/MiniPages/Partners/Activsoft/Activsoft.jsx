import activsoft from './../PartnersLogo/active.png';
import styles from './Activsoft.module.css';

const Activsoft = () => {
   return (
      <>
      <div className={styles.main}>
      <header className={styles.header}>
         <h6>Главная--Партнеры--«Актив»</h6>
         <h1>«Актив»</h1>
      </header>

      <hr />

      <body className={styles.body}>
      <img src={activsoft} alt="actlogo" />
      <div>
         <h4>Компания «Актив» — российский разработчик средств информационной безопасности, 
            крупнейший в России производитель электронных идентификаторов, электронных ключей 
            и решений для защиты программного обеспечения.</h4>
         <p>Продуктовый портфель компании содержит эффективные решения, направленные на повышение уровня информационной безопасности предприятий. У «Актива» накоплен обширный опыт реализации значимых проектов в ИКТ, корпоративном, финансовом и государственном секторах.</p>
         <p>Guardant — это стандарт де-факто на российском рынке защиты и лицензирования ПО. Данная линейка решений различных форматов для защиты и лицензирования программного обеспечения позволяет разработчикам софта построить надежные и эффективные продажи их программного продукта.</p>
         <p>Решения Guardant включают в себя программные средства лицензирования, аппаратные ключи, сервисы для управления заказами на ПО, инструменты для защиты программного кода и т. д. Продукты обладают достаточной гибкостью и в совокупности позволяют решить практически любую задачу по монетизации программного обеспечения.</p>
         <p>Рутокен — первая в России полностью отечественная линейка аппаратных продуктов и решений для аутентификации и создания электронной подписи. Ключевые носители Рутокен используются везде, где требуется безопасное хранение и использование паролей, цифровых сертификатов, ключей шифрования и ключей электронной подписи. Электронные идентификаторы Рутокен представлены в различных форм-факторах: от стандартного USB-токена или смарт-карты до Bluetooth-устройств.</p>
         <p>Ежегодно компания производит более 1 миллиона токенов и смарт-карт и является лидирующим поставщиком средств аутентификации и электронной подписи в нашей стране. «Актив» — самый крупный производитель токенов для массового рынка в России. Компания закрывает потребности в ключевых носителях всех значимых аккредитованных удостоверяющих центров. Большая часть российских коммерческих банков используют криптографические решения Рутокен в своих системах дистанционного обслуживания.</p>
         <p>Более 25 лет компания последовательно развивает собственное производство, которое не имеет аналогов в стране. Программный код всех устройств полностью создан разработчиками «Актива». Решения Рутокен и Guardant включены в единый реестр отечественного ПО.</p>
         <p>«Актив» постоянно сотрудничает более чем с 300 производителями оборудования и ПО. Так регулярно пополняется и совершенствуется портфель технологий, ведется планомерная работа по расширению партнерской сети. Это позволяет создавать комплексные решения, сочетающие инфраструктурную часть с автоматизацией бизнес-процессов. Вместе с технологическими и бизнес-партнерами ежегодно реализовывается более 1000 проектов.</p>
         <p>Компания ежегодно увеличивает продажи своих продуктов и занимает существенную долю на российском рынке средств аутентификации и электронной подписи. «Актив» — член Ассоциации предприятий компьютерных и информационных технологий, Ассоциации Защиты Информации, Ассоциации РОСЭУ, ISDEF, РусКрипто, АБИСС, ТК26, ТК362. Компания является авторизованным участником программы Apple MFi, действующим партнером Microsoft (Gold Certified Partner в компетенции Gold Application Development), VMWare (Technology Alliance Partner уровня Elite).</p>
      </div>
      </body>

      </div>
      </>
   )
}
export default Activsoft;