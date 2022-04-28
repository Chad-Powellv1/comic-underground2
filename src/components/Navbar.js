import { AiOutlineSearch } from 'react-icons/ai';
import comic from '../assets/comic.png';
import { Link } from 'react-router-dom';
import '../App.css';

export const Navbar = () => {


  return (
    <>
        <div className='header-left'>
            <div className='header-right'>
                <div className='header-wrapper'>
                    <span>Hello, </span>
                </div>
            </div>
        
        <div className='header-link'>
            <Link to='/login'style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)', }}><span className="header-sell">Login</span></Link>
            <Link to='/register' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Register</span></Link>
            <Link to='/sell' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Sell</span></Link>
            <Link to='/watchlist' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Watchlist</span></Link>
            <Link to="/about" style={{textDecoration: 'none', color:'black'}}>About Us</Link>
        </div>
        </div>
        <div className='header'>
        <img className='header-logo' src={comic} alt='Comic Underground icon' />
            <div className='header-search'>
            <input className='header-searchInput' type='text' placeholder="Search"/>
            <AiOutlineSearch className='header-searchIcon' />
            </div>
        </div>
    </>
  )
}
