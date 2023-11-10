import contactIMG from '../../assets/Contact/img.webp';
import adressIMG from '../../assets/Contact/location.svg';
import timeIMG from '../../assets/Contact/time.svg';
import phoneIMG from '../../assets/Contact/phone.svg';
import './Contact.css';

const Contact = () => {
  return(
    <section className="contact">
      <div className="contact__content">
          <div className="contact__content-row">
            <div className="contact__content-item content-item">
              <img src={adressIMG} alt="адрес" className="content-item__content-icon" />
              <div className="content-item__group">
                <h6 className="content-item__title">Воронеж</h6>
                <p className="content-item__txt">ул. Пушкина д. Колотушкина</p>
              </div>
            </div>

            <div className="contact__content-item content-item">
              <img src={timeIMG} alt="график работы" className="content-item__content-icon" />
              <div className="content-item__group">
                <h6 className="content-item__title">Время работы</h6>
                <p className="content-item__txt">С 10:00 до 22:00 <br /> Прием заказов до 21:30</p>
              </div>
            </div>
          </div>

          <div className="contact__content-row">
            <div className="contact__content-item content-item content-item _phone">
              <img src={phoneIMG} alt="телефон" className="content-item__content-icon" />
              <div className="content-item__group">
                <a href='tel: +78005553535' className="content-item__title">+7 (800) 555-35-35</a>
              </div>
            </div>
          </div>
      </div>
      <img src={contactIMG} alt="фото" className="contact__img" />
    </section>
  )
}

export default Contact;