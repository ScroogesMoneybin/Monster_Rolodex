import { ChangeEvent } from 'react';
import './search-box.styles.css';

//Objects can be identified using either "type" or "interface"
/*
interface ISearchBoxProps {  //Interface requires an I in front of object name and can extend other objects. type cannot extend
  className: string;
  placeholder?: string;  //The ? makes it optional, so it can be either string or null (string | null)
  onChangeHandler: (a: string) => void;   //the function typescript has the type of the input listed in the parentheses and type of output right of the arrow
}
*/

type SearchBoxProps = { //type doesn't use I in front of name like interface. It can do a union |, which interface doesn't.
  className: string;
  placeholder?: string;  
  onChangeHandler: (event:ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}  //Instead of using ChangeEvent<HTMLInputElement> above, we could write onChange={(e)=>onChangeHandler} and use (a: string)=> void above in place of ChangeEvent<HTMLInputElement> 
  />
);

export default SearchBox;
