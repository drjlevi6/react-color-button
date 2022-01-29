/*
 * Display a button whose text shows its RGB color.
 * Clicking the button sets it to a new color and
 * modifies the text accordingly.
 */

import React from 'react';
import ReactDOM from 'react-dom';
//import Container from 'react-bootstrap/container';
//import Button from 'react-bootstrap/Button';
import './index.css';

class App extends React.Component {
  state = { r: 37, g: 255, b: 38 };

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
  }

  // Initialize the button's background color
  componentDidMount() {
    this.setButtonBackgroundColor();
    //this.setButtonTextColor();
    //this.onChangeRGB();
 }

  // Change the button's background RGB color.
  onChangeRGB = () => { // state consists of 3 integer RBG components
    let [newR, newG, newB ] = [
      this.getRandomRGBComponent(),
      this.getRandomRGBComponent(),
      this.getRandomRGBComponent()
    ];
    // console.log('onChangeRGB(): state before new RGBs', this.state);
    this.setState({ r: newR, g: newG, b: newB });
    // console.log('onChangeRGB(): state after new RGBs', this.state);
    this.setButtonBackgroundColor();
    this.setButtonTextColor();
  }

  // set the button's text color to white or black,
  // depending on the button color's brightness.
  setButtonTextColor = () => {
    const rgb = this.state;
    var brightness = Math.floor((parseInt(rgb.r) + 
    parseInt(rgb.g) + parseInt(rgb.b)) / 3);
    document.getElementById(
      "colorButton").style.color = 
      (brightness >= 110) ? "black" : "white";
  }

  // Apparently just running this function provides the necessary
  // delay for the new state r, g, b values to take effect!
  delayThenChangeRGB = () => {
    setTimeout(this.onChangeRGB, 0);
  }

  render() {
    return (
      <div className="App">
        <button className='colorButton' id='colorButton'
          onClick= {this.delayThenChangeRGB}>
          <div>My current RGB color is &nbsp;
            {this.getButtonRGBString()}.</div>
          <div>Click me to change it.</div>
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))


