import PropTypes from 'prop-types';

import './welcome.scss'

const Welcome = ({user}) => (
    <div className="main">
        <p className="main-presentation">
            With the <span>UpDown</span> app you can generate your ToDo lists and get track of your expenses.
        </p>
        <h2 className="main-welcome">hello <span className="main-welcome__name">{user[0].name}</span></h2>
    </div>
    );

Welcome.propTypes = {
    user: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Welcome;