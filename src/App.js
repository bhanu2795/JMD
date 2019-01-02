import React, {
    Component
} from 'react';
import './global.scss';
import Header from './components/header';
import SideBar from './components/sidebar';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SideBar />
            </div>
        );
    }
}

export default App;