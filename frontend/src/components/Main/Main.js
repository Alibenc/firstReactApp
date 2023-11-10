import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import Chat from "../Chat/Chat";

const Main = () => {
  return(
    <main className="main">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/cart' element={<MenuPage/>}/>
      </Routes>
      <Chat/>
    </main>
  )
  
}

export default Main;