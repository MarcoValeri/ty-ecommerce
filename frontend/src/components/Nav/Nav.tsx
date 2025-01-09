import { Link } from 'react-router';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/books" >Books</Link></li>
                <li><Link to="/book-add" >Book Add</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;