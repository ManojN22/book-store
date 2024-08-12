import { useSelector } from "react-redux";
import WishlistItem from "./Wishlist.Item";
export default function Wishlist(){
    const wishlist = useSelector((state) => state.wishlist.data);
    return <div className="Sticky-Wishlist">
        <div className="Title">My Reading Wishlist</div>
        <div className="Wishlist-Container">
            {wishlist.map(data=><WishlistItem wishlistItem={data}/>)}
        </div>
    </div>
}