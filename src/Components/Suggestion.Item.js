import {useDispatch } from 'react-redux';
import { setData } from '../Redux/bookStore.slice';
import { deactivate } from '../Redux/bookStore.Suggestion.slice';
export default function SuggestionItem({searchResultCard}){
    const dispatch = useDispatch();
    function clickOutside(){
        dispatch(deactivate())
        document.removeEventListener('click', clickOutside);
    }
    function onSuggestionClick(){
        dispatch(setData(searchResultCard));
        dispatch(deactivate());
        document.removeEventListener('click', clickOutside);
        
    }
    return <div className='Suggestion-Items' onClick={onSuggestionClick}>{searchResultCard?.volumeInfo?.title}</div>;
}