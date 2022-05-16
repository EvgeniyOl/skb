import styles from './Cost.module.css';
import { useForm } from 'react-hook-form';

const Cost = () => {
   const {
      register,  //набор св-в
      formState: {
         errors, 
      },
      handleSubmit, //обертка
      reset,  //сброс после отправки
   } = useForm();

   const onSubmit = (data) => {
      alert(JSON.stringify(data));
      reset();
   }

   return(
      <div className="container-lg">

         <div className="row col-12 text-center">
            <h2>Запрос информации от ООО "СКБ"</h2>
         </div>

         <div class="row justify-content-evenly" className={styles.formStyle}>
            <form class='row' onSubmit={handleSubmit(onSubmit)}>
               <div className="col-lg-6 col-sm-12 justify-content-evenly" >

                  <div class="mb-3">
                     <label for="Email" class="form-label">Адрес электронной почты</label>

                     <input type="email" 
                     class="form-control"
                     placeholder="Введите адрес своей электронной почты" 
                     {...register('email', {
                        required: "Поле обязательно к заполнению!",
                        minLength: {
                           value: 5,
                           message: 'Минимум 5 символов!'
                        }
                     })} />

                  </div>
                  <p className={styles.errors}>{errors?.email?.message}</p>

                  <div class="mb-3">
                     <label for="user" class="form-label">Контактное лицо</label>
                     <input type="text" 
                     class="form-control" 
                     placeholder="Ф.И.О." 
                     aria-label="Username" 
                     aria-describedby="addon-wrapping"
                     {...register('user', {
                        required: "Поле обязательно к заполнению!",
                        minLength: {
                           value: 3,
                           message: 'Минимум 3 символа!'
                        }
                     })} />
                  </div>
                  <p className={styles.errors}>{errors?.user?.message}</p>

                  <div class="mb-3">
                     <label for="city" class="form-label">Ваш город</label>
                     <input type="text" 
                     class="form-control" 
                     placeholder="Название города" 
                     aria-label="city" 
                     aria-describedby="addon-wrapping"
                     {...register('city', {
                        required: "Поле обязательно к заполнению!",
                        minLength: {
                           value: 3,
                           message: 'Минимум 3 символа!'
                        }
                     })} />
                  </div>
                  <p className={styles.errors}>{errors?.city?.message}</p>

                  <div class="mb-3">
                     <label for="phoneNumber" class="form-label">Номер телефона</label>
                     <input type="text" 
                     class="form-control" 
                     placeholder="+7-913-***-**-**" 
                     aria-label="phoneNumber" 
                     aria-describedby="addon-wrapping"
                     {...register('phoneNumber', {
                        required: "Поле обязательно к заполнению!",
                        minLength: {
                           value: 11,
                           message: 'Минимум 11 символов!'
                        }
                     })} />
                  </div>
                  <p className={styles.errors}>{errors?.phoneNumber?.message}</p>

                  <div class="mb-3">
                     <label for="formControlTextarea" class="form-label">Напишите комментарий</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </div>

               </div>
               <div className="col-lg-6 col-sm-12 justify-content-evenly">
                     <div class="form-label col-sm-2 pt-0">Виды услуг</div>
                        <div class="col-sm-10">
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Аттестация' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="attestation">Аттестация</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Ежегодный контроль' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Ежегодный контроль</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Аудит' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Аудит</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Импортозамещение' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Импортозамещение</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Поставка средств защиты информации' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Поставка средств защиты информации</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Антивирусное ПО' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Антивирусное ПО</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Контроль и анализ защищенности' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Контроль и анализ защищенности</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Межсетевые экраны' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Межсетевые экраны</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Резерное копирование' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Резерное копирование</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='СЗИ от НДС' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">СЗИ от НДС</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Системы обнаружения вторжений' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Системы обнаружения вторжений</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Поставка средств криптографической защиты информации' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Поставка средств криптографической защиты информации</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Поставка по VipNet' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Поставка по VipNet</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Поставка по КриптоПро' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Поставка по КриптоПро</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Подключение к информационным системам' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Подключение к информационным системам</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Услуги удостоверяющего центра' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Услуги удостоверяющего центра</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value='Установка и настройка ПО' {...register('Услуга', {required: false})} />
                              <label class="form-check-label" for="gridCheck1">Установка и настройка ПО</label>
                           </div>
                        </div>
                     </div>
                     <div class="row col-12" className={styles.warning} >
                        <p>Внимание! Заполнив поля настоящей формы и нажав кнопку "Отправить запрос", Вы на основании ч. 2 ст. 154 Гражданского Кодекса Российской Федерации и ч. 1 ст. 15 Федерального закона "О персональных данных" даёте предварительное согласие на обработку Ваших персональных данных, внесенных в поля настоящей формы, ООО "СКБ" (ИНН 5506207707) в целях продвижения товаров, работ, услуг на рынке путем осуществления прямых контактов с Вами, как потенциальным потребителем, с помощью средств связи.</p>
                     </div>
                     <div className="row col-12 justify-content-center">
                        <button type="submit" class="btn btn-success">Отправить Запрос</button>
                     </div>
            </form>  
         </div>
      </div>
   )
}
export default Cost;