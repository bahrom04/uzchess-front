import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Navigation from './components/Navigation';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      
      <Navigation> </Navigation>
      <NewsCard></NewsCard>
      <Footer></Footer>

    </div>
  );
}

export default App;
