import React from "react";
import "./Header.css";
import hp from './hp.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider'

function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to='./'>
      <img src={hp} className="header-logo"></img>
      </Link>
      <div className="searchBar">
        <input type="text" className="search-input"/>
        <SearchIcon className='header-searchIcon'/>
        </div>

      <div className="header-nav">
        <div className="header-option">
            <span className='header-one'>
                Hello Potterhead!
            </span>
            <span className='header-two'>
                Sign In
            </span>
        </div>
        <div className="header-option">
        <span className='header-one'>
                Returns
            </span>
            <span className='header-two'>
               & Orders
            </span>
        </div>
       
      </div>
      <Link to='./checkout'>
      <div className='basket'>
      < ShoppingCartIcon/>
        <span className='basket-count header-two'>{basket?.length}</span>

      </div>
      </Link>
    </div>
  );
}

export default Header;
