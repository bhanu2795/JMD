import React, {
    Component
} from 'react';
import Logo from './logo';
import Nav from './nav';
import './style.scss';

class Header extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="header-container">
                    <Logo />
                    <Nav />
                </div>
            </div>
        );
    }
}

export default Header;