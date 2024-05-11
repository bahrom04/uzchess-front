import Navigation from './components/Navigation';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Courses from './components/Courses';
import Main from './components/Main';
import Library from './components/Library';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>

        <div className='content'>
          <Routes>

            <Route path="/" element={<Main/>}/>
            <Route path="/news" element={<NewsCard/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/library" element={<Library/>}/>
              

            
          </Routes>
        </div>

        <Footer></Footer>
        <h2>asd</h2>
      </div>
    </Router>
  );
}

export default App;
