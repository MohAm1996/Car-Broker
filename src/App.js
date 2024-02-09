import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Trending from './components/Trending/Trending'
import Sellers from './components/Sellers/Sellers'
import Auction from './components/Auction/Auction'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Search/>
      <Trending/>
      <Sellers/>
      <Auction/>
      <Review/>
      <Footer/>
      </div>
  );
}

export default App;
