/*
 * Create a button whose text shows its RGB color.
 * Clicking the button sets it to a new color and
 * modifies the text accordingly.
 * 
 * The method of choosing the new color may involve
 * choosing three R, G, B values at random; or it
 * may be some other method.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))


