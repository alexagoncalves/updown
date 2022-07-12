import upDownLogo from './images/up-down-logo-colorfull.png';

import './header.scss';

// == header with logo, website title and presentation
const Header = () => (
    <header className="header">
        <nav className="header-logo__title">
            <img src={upDownLogo} alt="updown logo" className="header-logo"/>
            <h1 className="header-title">Welcome to the UpDown App</h1>
        </nav>
        <p className="header-presentation">
            With the <span>UpDown</span> project you can generate your ToDo lists and get track of your depenses.
        </p>
    </header>
)

export default Header;