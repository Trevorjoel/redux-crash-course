import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';



class App extends Component {
    
    render() {
        return (
            <Provider store={store} >
            <div className="App">
                <header className="App-header">
                
                <h1>REDUX CRASH COURSE!</h1>
                
                </header>
                <PostForm/>
                <hr/>
                <Posts/>
            </div>
            </Provider>
        );
    }
}
export default App;
// Notes: <Provider store = {store}>; Wraps the entire react app
// We no longer need the constructor and props as redux manages the state