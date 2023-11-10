import React, {useState, useEffect} from 'react';
import rollIMG from '../../assets//Menu/fusion.webp';

const DishCard = (props) => {
  return(
    props.goodsList.map(dishObj => {
      return(
        <div key={dishObj.id} className="menu-dishes__card">
          <img src={rollIMG}
          alt={dishObj.name} className="menu-dishes__photo" />
          <div className="menu-dishes__content">
            <h4 className="menu-dishes__dish-name">{dishObj.name}</h4>
            <p className="menu-dishes__description">{dishObj.desc}</p>
            <div className="menu-dishes__card-price-buy">
              <p className="menu-dishes__price"><span>{dishObj.price}</span> руб.</p>
              <button className="menu-dishes__add-in-cart">Купить</button>
            </div>
          </div>
        </div>
      )
    })
  )
}

const MenuBody = () => {
  const [goodsList, setGoodsList] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await ((await fetch('/api/menu-dishes')).json());
      setGoodsList(response);
    }
    fetchData();
  }, []);

  return(
    <div className="menu-dishes__body">
      {!goodsList ? 'Loading...' : <DishCard goodsList={goodsList}/>}
    </div>
  )
}

export default MenuBody;