import upDownLogo from './images/up-down-logo-colorfull.png';
import { Link } from 'react-router-dom';

import './header.scss';

// == header with logo, website title and presentation
const Header = () => (
    <header className="header">
        <nav className="header-logo__title">
            <Link to="/">
                <img src={upDownLogo} alt="updown logo" className="header-logo"/>
            </Link>
            <h1 className="header-title">Welcome to the UpDown App</h1>
        </nav>
    </header>
)

export default Header;