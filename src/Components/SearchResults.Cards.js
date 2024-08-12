import { useDispatch } from "react-redux";
import { addToList } from "../Redux/wishlist.slice";

export default function SearchResultCard({searchResultCard}){
    const dispatch = useDispatch();
    function onClickHandler(){
        dispatch(addToList(searchResultCard?.volumeInfo?.title));
    }
    return <div className="Book-Card" onClick={onClickHandler}>
        <div className="Left-Img">
            <img className="Book-Thumbnail" src={searchResultCard?.volumeInfo?.imageLinks?.thumbnail}/>
        </div>
        <div className="Right-Description">
            <div className="Title">{searchResultCard?.volumeInfo?.title}</div>
            <div><span className="Sub-Title">Authors: </span>{searchResultCard?.volumeInfo?.authors?.map((authorName)=>authorName+", ")}</div>
            <div><span className="Sub-Title">Publisher: </span>{searchResultCard?.volumeInfo?.publisher}</div>
            <div><span className="Sub-Title">Published Date: </span>{searchResultCard?.volumeInfo?.publishedDate}</div>
            <div><span className="Sub-Title">Description: </span>{searchResultCard?.volumeInfo?.description}</div>
        </div>
    </div>
}