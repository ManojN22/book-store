import './App.css';
import SearchResult from './Components/SearchResults';
import SearchBar from './Components/SearchBar';
import Wishlist from './Components/Wishlist';
function App() {
  
  return (
    <div className="App">
      <div className="Book-Search">
      <SearchBar />
      <SearchResult />
      </div>
      <div className="Book-Wishlist">
        <Wishlist />
      </div>
    </div>
  );
}

export default App;
