import upDownLogo from './images/up-down-logo-colorfull.png';

import './header.scss';

// == header with logo, website title and presentation
const Header = () => (
    <header className="header">
        <nav className="header-logo__title">
            <img src={upDownLogo} alt="updown logo" className="header-logo"/>
            <h1 className="header-title">Welcome to the UpDown App</h1>
        </nav>
        
    </header>
)

export default Header;