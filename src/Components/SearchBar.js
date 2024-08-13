import { useSelector,useDispatch } from 'react-redux';
import {useCallback, useState} from 'react';
import _debounce from 'lodash/debounce';
import { fetchResults } from '../Redux/bookStore.slice';
import { activate, bookStoreSuggestionfetchResults, deactivate } from '../Redux/bookStore.Suggestion.slice';
import SuggestionItem from './Suggestion.Item';

export default function SearchBar(){
    const [input,setInput] = useState("")
    const suggestionItem = useSelector((state=>state.bookStoreSuggestion.active));
    const dispatch = useDispatch();
    const bookStoreSuggestion =  useSelector(state =>state.bookStoreSuggestion.data);
    function clickOutside(){
        dispatch(deactivate())
        document.removeEventListener('click', clickOutside);
    }
    function handleDebounceBookFetch(bookName) {
       dispatch(bookStoreSuggestionfetchResults(bookName));
       dispatch(activate());
       document.addEventListener('click',clickOutside );
    }
    const debounceBookFetch = useCallback(_debounce(handleDebounceBookFetch, 1000), []);
    function handleOnChange(e){
        setInput(e.target.value);
        debounceBookFetch(e.target.value);
    }
    function handleOnSubmit(){
        dispatch(fetchResults(input));
    }

    return <div className='Search-Bar'>
        <div>
        <input className='Bar-Input' onChange={handleOnChange} value={input}/>
        {suggestionItem?<div className='Search-Sugesstion'>
        {bookStoreSuggestion.map((searchResultCard)=><SuggestionItem searchResultCard={searchResultCard}/>)}
        </div>:<></>}
        </div>
    
        <div >
            
            <button onClick={handleOnSubmit}>SUBMIT</button> 
    
        </div>
    </div>;
}