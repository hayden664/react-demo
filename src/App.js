import React, { Component } from 'react';
import './index.css';
import List from './components/list';
import Sort from './components/sort';



class App extends Component {
    render() { 
        return (
            <React.Fragment>
                <main className="container-fluid">
                    {/* <Sort /> */}
                    <List />
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;