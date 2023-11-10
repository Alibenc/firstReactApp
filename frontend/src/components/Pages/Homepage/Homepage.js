import Menu from "../../Menu/Menu";
import MainSection from "../../MainSection/MainSection";
import Delivery from "../../Delivery/Delivery";

const Homepage = () => {
  return(
    <div className="_container">
      <MainSection/>
      <Menu/>
      <Delivery/>
    </div>
  )
}

export default Homepage;