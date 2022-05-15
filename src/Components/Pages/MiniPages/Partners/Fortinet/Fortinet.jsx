import styles from './Fortinet.module.css';
import fort from './../PartnersLogo/kupit-fortinet-fortigate-apparatnye-resheniya-po-dostupnoy-tsene.jpeg';

const Fortinet = () => {
   return (
      <div className={styles.main}>
      <header className={styles.header}>
         <h6>Главная--Партнеры--Fortinet</h6>
         <h1>Fortinet</h1>
      </header>

      <hr />

      <body className={styles.body}>
      <img src={fort} alt="Fortinetlogo" />
      <div>
         <h4>На протяжении своего существования компания Fortinet остается верна главному принципу: предоставлять клиентам интегрированные высокопроизводительные средства безопасности ИТ-инфраструктуры с широким охватом.</h4>
         <p>Мы разрабатываем средства защиты сетей, содержимого и доступа, которые поддерживают обмен данными и в совокупности формируют комплексную систему. Все наши решения получили высокие оценки специалистов. В состав нашей уникальной адаптивной системы сетевой безопасности  Security Fabric входят процессоры безопасности, интуитивно понятная операционная система и функция сбора данных об угрозах с последующим их применением. Все эти компоненты обеспечивают безопасность и высокую производительность, а также эффективное отслеживание и администрирование.  Система Fortinet Security Fabric обеспечивает интеграцию, автоматизацию и широкий охват, оставаясь простой в управлении. Сократите количество направлений атак и управляйте ими при помощи интегрированной функции отслеживания с широким охватом, обеспечьте защиту от продвинутых угроз с помощью средства предотвращения вторжений на базе технологии искусственного интеллекта и упростите управление за счет автоматизации операций и оркестрации.</p>
         <p>Архитектура безопасности Fortinet Security Fabric обеспечивает интеграцию и автоматизацию всей инфраструктуры, обеспечивая непревзойденную защиту и прозрачность для каждого сегмента сети и устройства, будь то виртуальная машина или физическое устройство, в облаке или локально.</p>
         <p>Флагманская платформа корпоративных межсетевых экранов FortiGate поддерживает большое количество функций безопасности и сетевых функций нового поколения. Она представлена в разных размерах и форм-факторах, благодаря чему легко адаптируется к любой среде. </p>
         <p>Наше положение на рынке и эффективность решений в значительной степени подтверждены специалистами-аналитиками, независимыми испытательными лабораториями, коммерческими организациями и медиакомпаниями по всему миру. Мы гордимся тем, что к числу наших лояльных клиентов принадлежит большинство организаций, входящих в рейтинг Fortune 500.</p>
         <p>Главный офис компании Fortinet находится в Саннивейле, Калифорния. Также компания обладает сетью офисов по всему миру. Компания Fortinet, основанная в 2000 г. Кеном Се (Ken Xie) (дальновидным основателем, бывшим президентом и генеральным директором компании NetScreen), находится под управлением группы руководителей, имеющих богатый опыт в вопросах сетевых подключений и обеспечения безопасности.</p>
      </div>
      </body>

      </div>
   )
}
export default Fortinet;