import './Menu.css';
import MenuBody from './MenuBody';


const Menu = () => {
  return(
    <section className="menu-dishes">
      <h2 className="menu-dishes__title">Меню ресторана!</h2>
      <MenuBody/>
    </section>
  )
}

export default Menu;