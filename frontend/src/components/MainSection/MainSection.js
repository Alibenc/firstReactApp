import promotionBanner from '../../assets/Homepage/banner-home.webp';
import './MainSection.css';

const MainSection = () => {
  return(
    <section className="main-section">
      <img src={promotionBanner} alt="акция в день рождения" className="main-section__banner"/>
    </section>
  )
}

export default MainSection;