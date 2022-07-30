import './mainmenu.scss'
import { Link } from 'react-router-dom';

const MainMenu = () => (
    <div className="mainmenu-buttons">
        <Link to="/todolist">
            <button type="button" onClick={() => {}}className="material-symbols-outlined">library_add_check</button>
        </Link>
        <Link to="/expenses">
            <button type="button" onClick={() => {}}className="material-symbols-outlined">add_card</button>
        </Link>
    </div>
)

export default MainMenu;