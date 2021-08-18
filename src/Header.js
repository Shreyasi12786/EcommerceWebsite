import React from "react";
import "./Header.css";
import hp from './hp.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function Header() {
  const [{basket,user}, dispatch] = useStateValue();
const handleAuth =()=>{
  if(user){
     auth.signOut();
  }
}

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
      <Link to={!user &&'/login'}>
        <div  onClick={handleAuth} className="header-option">
            <span className='header-one'>
                Hello Potterhead!
            </span>
            
            <span className='header-two'>
                {user? 'Sign Out':'Sign In'}
            </span>
            
        </div>
        </Link>
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
