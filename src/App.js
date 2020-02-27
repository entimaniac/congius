import React from 'react';
import './App.css';
import {text} from './images/attribution'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>CONGIUS</h1>
                <p>
                    Turning your <span className="idea-color">idea</span> into your next <span
                    className="product-color">product</span>.
                </p>
                <div className="attribution-text">{text}</div>
            </header>
        </div>
    );
}

export default App;
