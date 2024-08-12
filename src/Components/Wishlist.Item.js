import { useDispatch } from "react-redux";
import { deleteFromList } from "../Redux/wishlist.slice";
export default function WishlistItem({wishlistItem}){
    const dispatch = useDispatch();
    function onDelete(){
        dispatch(deleteFromList(wishlistItem));
    }
    return <div className="Wishlist-Item">
        <span>{wishlistItem}</span>
        <button onClick={onDelete}> DELETE</button>
    </div>
}