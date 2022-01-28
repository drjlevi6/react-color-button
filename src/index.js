/*
 * Display a button whose text shows its RGB color.
 * Clicking the button sets it to a new color and
 * modifies the text accordingly.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = { r: 0, g: 255, b: 0 };

  // Get a random integer, 0-255
  getRandomRGBComponent() {
    return Math.floor(Math.random() * 255);
  }

  // Make a string of the RGB array
  getButtonRGBString() {
    const rgb = this.state;
    return( '[' + rgb.r + ', ' +  rgb.g + ', ' + rgb.b + ']' );
  }

  setButtonBackgroundColor() {
    const rgb = this.state;
    document.getElementById(
      "colorButton").style.backgroundColor = 
      'rgb(' + rgb.r + ',' +  rgb.g + ',' + rgb.b + ')';
    console.log('setButtonBackgroundColor', rgb)
  }

  // Initialize the button's background color
  componentDidMount() {
    this.setButtonBackgroundColor();
 }

  // Change the button's background RGB color.
  onChangeRGB = () => {
    this.setState({
      r: this.getRandomRGBComponent(),
      g: this.getRandomRGBComponent(),
      b: this.getRandomRGBComponent(),
    })
    console.log('onChangeRGB(): New RGB is', this.state);
    this.setButtonBackgroundColor();
    this.setButtonTextColor();
  }

  // set the button's text color to white or black,
  // depending on the button color's brightness.
  setButtonTextColor = () => {
    var brightness = (parseInt(this.state.r) + 
    parseInt(this.state.g) + parseInt(this.state.b)) / 3;
      document.getElementById(
        "colorButton").style.color = 
        (brightness > 128) ? "black" : "white";
      console.log('setButtonTextColor(), brightness:', brightness);
}

  render() {
    return (
      <div className="App">
        <button className='colorButton' id='colorButton'
          onClick= {this.onChangeRGB}>
          <div>My current RGB color is &nbsp;
            {this.getButtonRGBString()}.</div>
          <div>Click me to change it.</div>
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))


