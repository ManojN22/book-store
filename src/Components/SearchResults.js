import Loader from "./Loading.js";
import SearchResultCard from "./SearchResults.Cards"
import { useSelector } from "react-redux";

export default function SearchResult(){
    const bookStoreLoader = useSelector(state =>state.bookStore.status);
    const bookStore = useSelector((state) => state.bookStore.data);
    return <div className="Search-Results">
    {bookStoreLoader === 'loading'?<Loader/>:bookStore.map(data=><SearchResultCard searchResultCard = {data}/>)}
    </div>
}