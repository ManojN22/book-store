import { useDispatch } from 'react-redux';
import {useCallback, useState} from 'react';
import _debounce from 'lodash/debounce';
import { fetchResults } from '../Redux/bookStore.slice';
export default function SearchBar(){
    const [input,setInput] = useState("")
    const dispatch = useDispatch();
    function handleDebounceBookFetch(bookName) {
       dispatch(fetchResults(bookName));
    }
    const debounceBookFetch = useCallback(_debounce(handleDebounceBookFetch, 2000), []);
    function handleOnChange(e){
        setInput(e.target.value);
        debounceBookFetch(e.target.value);
    }
    function handleOnSubmit(){
        dispatch(fetchResults(input));
    }
    return <div className='Search-Bar'>
    <input onChange={handleOnChange} value={input}/>
    <button onClick={handleOnSubmit}>SUBMIT</button>
    </div>;
}