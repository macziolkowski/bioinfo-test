import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './stores/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout />
            </Provider>
        );
    }
}

export default App;
