import './App.css';
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Trending from './components/Trending/Trending'
import Sellers from './components/Sellers/Sellers'
import Auction from './components/Auction/Auction'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
