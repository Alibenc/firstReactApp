import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = () => {
  return(
    <div className="_wrapper app">
      <Header/>
      <Main/>
      <Footer/>
    </div>
    
  )
}

export default App;