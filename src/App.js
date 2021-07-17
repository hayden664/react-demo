import React, { Component } from 'react';
import './index.css';
import List from './components/list';

class App extends Component {
    render() { 
        return (
            <React.Fragment>
                <main className="container-fluid">
                    <List />
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;