/*
 * Display a button whose text shows its RGB color.
 * Clicking the button sets it to a new color and
 * modifies the text accordingly.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
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
      "colorAlert").style.backgroundColor = 
      'rgb(' + rgb.r + ',' +  rgb.g + ',' + rgb.b + ')';
  }

  // Initialize the button's background color
  componentDidMount() {
    const colorAlert = document.getElementById("colorAlert");
    colorAlert.style.disply = 'block';
    this.setButtonBackgroundColor();
 }

  // Change the button's background RGB color.
  onChangeRGB = () => { // state consists of 3 integer RBG components
    let [newR, newG, newB ] = [
      this.getRandomRGBComponent(),
      this.getRandomRGBComponent(),
      this.getRandomRGBComponent()
    ];
    //console.log('onChangeRGB(): state before new RGBs', this.state);
    this.setState({ r: newR, g: newG, b: newB });
    //console.log('onChangeRGB(): state after new RGBs', this.state);
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
      "colorAlert").style.color = 
      (brightness >= 110) ? "black" : "white";
  }

  // Apparently just running this function provides the necessary
  // delay for the new state r, g, b values to take effect!
  delayThenChangeRGB = () => {
    setTimeout(this.onChangeRGB, 0);
  }

  hideAlert() {
      //alert('hideAlert');
      document.getElementById("colorAlert").style.display = 'none';
  }

  render() {
     return (
    <Container className="App">
      <Col className='main-col' xs={4}>
       <div className='goodbye' id='goodbyeDiv'
        fontSize='large'>Goodbye!</div>  
      <Alert className='goodbye overlay' id='colorAlert'>
        <Alert.Heading className='welcome-header'>
          Welcome to the Color-Displayer!
        </Alert.Heading>
        <p></p>
        <Row className='contents-row'>
          My current RGB color is &nbsp;
          {this.getButtonRGBString()}.
        Click my Change Color button to change it.
        </Row>
        <Row className='filler'>&nbsp;</Row>
        <Row id='buttonRow' xs={6}>
        <Button onClick={this.delayThenChangeRGB}>
          Change Color
        </Button>
        &nbsp;
        <Button onClick={this.hideAlert}>
          Close
        </Button>
        </Row>

      </Alert>
      </Col>
      </Container>
   )
  }                                 // render
}                                   // class App

ReactDOM.render(<App />, document.getElementById('root'))
