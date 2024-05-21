import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Layout 
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import NewsCard from './components/NewsCard';
import NewsDetail from './components/NewsDetail';
import Courses from './components/Courses';
import Main from './components/Main';
import Library from './components/Library';

// Api data
import news from "./data/news.json";
import books from "./data/books.json"


function App() {
  const [newsData] = useState(news)
  const [booksData] = useState(books)

  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>

        <div className='content'>
          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/news" element={<NewsCard news={newsData.news} books={booksData.books} />} />
            <Route path="/news/1" element={<NewsDetail/>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/library" element={<Library />} />
            
          </Routes>
        </div>

        <Footer></Footer>
        <h2>asd</h2>
      </div>
    </Router>
  );
}

export default App;
