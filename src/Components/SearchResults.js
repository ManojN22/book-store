import SearchResultCard from "./SearchResults.Cards"
import { useSelector } from "react-redux";

export default function SearchResult(){
    const bookStore = useSelector((state) => state.bookStore.data);
    return <div className="Search-Results">
    {bookStore.map(data=><SearchResultCard searchResultCard = {data}/>)}
    </div>
}