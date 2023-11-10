import iconDeliveryIMG from '../../assets/Homepage/Delivery/delivery.svg';
import iconPickupIMG from '../../assets/Homepage/Delivery/pickup.svg';
import iconTermsIMG from '../../assets/Homepage/Delivery/terms.svg';
import './Delivery.css';

const Delivery = () => {
  return(
    <section className="delivery">
      <h5 className="delivery__title">Доставляем заказы по всему городу!</h5>

      <div className="delivery__group">
        <div className="delivery__item del-item">
          <img src={iconDeliveryIMG} alt="доставка" 
          className="del-item__icon" />
          <h6 className="del-item__title">Время доставки</h6>
          <p className="del-item__txt">От 40 минут в будни и от часа в выходные и праздничные дни</p>
        </div>

        <div className="delivery__item del-item">
          <img src={iconPickupIMG} alt="условия доставки" 
          className="del-item__icon del-item__icon-big" />
          <h6 className="del-item__title">Условия доставки</h6>
          <p className="del-item__txt">Бесплатная доставка от 400 рублей по городу, далее в зависимости от адреса</p>
        </div>

        <div className="delivery__item del-item">
          <img src={iconTermsIMG} alt="самовывоз" 
          className="del-item__icon del-item__icon-big" />
          <h6 className="del-item__title">Самовывоз</h6>
          <p className="del-item__txt">Бесплатно с 10:00 до 21:30</p>
        </div>
      </div>

    </section>
  )
}

export default Delivery