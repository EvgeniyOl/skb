import styles from './GeneralFour.module.css';
import dir from './../../../../Assets/collectiv/father.jpeg';
import mns from './../../../../Assets/collectiv/hova.jpeg';
import bux from './../../../../Assets/collectiv/bux.jpeg';
import hr from './../../../../Assets/collectiv/hr.jpeg';
import ilon from './../../../../Assets/collectiv/ilon.jpeg';
import { Card } from 'react-bootstrap';

const GeneralFour = () => {
   return (
      <div class="container p-0" className={styles.container} id='companyInfo'>
         <div class="row" className={styles.people}>
            <div className="col">
               <h3>Наши Сотрудники</h3>
            </div>
         </div>

         <div class="row d-flex justify-content-center">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
               <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={dir} alt="..." />
                  <Card.Body>
                     <Card.Title className='text-center'>Patron</Card.Title>
                     <Card.Text>
                        "Ты пришёл и говоришь: Дон Корлеоне, мне нужна справедливость. Но ты просишь без уважения, ты не предлагаешь дружбу, ты даже не назвал меня крёстным отцом."
                     </Card.Text>
                  </Card.Body>
               </Card>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
               <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={ilon} alt="..." />
                  <Card.Body>
                     <Card.Title className='text-center'>Начальник отдела</Card.Title>
                     <Card.Text>
                        «С искусственным интеллектом нужно быть очень осторожным. Я все больше склоняюсь к тому, что нам необходим обязательный контроль, возможно международном уровне. Играя с искусственным интеллектом, мы призываем демона»
                     </Card.Text>
                  </Card.Body>
               </Card>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
               <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={bux} alt="..." />
                  <Card.Body>
                     <Card.Title className='text-center'>Главный бухгалтер</Card.Title>
                     <Card.Text>
                        Все средства хороши, кроме безналичных.
                     </Card.Text>
                  </Card.Body>
               </Card>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
               <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={mns} alt="..." />
                  <Card.Body>
                     <Card.Title className='text-center'>"Стажер"</Card.Title>
                     <Card.Text>
                        Чтобы отыскать баг, ты должен мыслить, как баг!
                     </Card.Text>
                  </Card.Body>
               </Card>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
               <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={hr} alt="..." />
                  <Card.Body>
                     <Card.Title className='text-center'>HR</Card.Title>
                     <Card.Text>
                        Не задерживаемся после 18, не ругаемся, помогаем во всем, руководитель — пуська.
                     </Card.Text>
                  </Card.Body>
               </Card>
            </div>

         </div>
      </div>
   )
}
export default GeneralFour;