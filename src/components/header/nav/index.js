import React, {
    Component
} from 'react';
import Button from '@material-ui/core/Button';

class Nav extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="btn-container">
                    <a className="sign-login-btn">Login/Register</a>
                </div>
            </div>
        );
    }
}

export default Nav;