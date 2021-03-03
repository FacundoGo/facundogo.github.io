import React, { Component } from 'react'
import Posts from './Posts'
import './Main.css'
import logo from '../react-logo.png';

export default class Main extends Component {
  render() {
    return (
        <div className="container-main1">
        <h1 style={{ marginTop: '30px' }}>Hi! I'm Facundo.</h1>
        <div className="main-overview"style={{display: 'flex', justifyContent: 'center'}}><h4 className="main-overview-h4">
        Freelance Fullstack Developer and Accelerator Development Consultant at eWorks.</h4></div>
        {/* <Main></Main> */}
            <div id="container-main">
                  <Posts name="Experience" emoji="🧙‍♂️" img="../experience1.jpg"></Posts>
                  <Posts name="Education" emoji="🎒" img="../education1.jpg"></Posts>
                  {/* <Posts name="Software Projects" img="../software1.jpg"></Posts> */}
                  {/* <Posts name="Services" img="../services1.jpg"></Posts> */}
                  <Posts name="Contact" emoji="🔦" img="../contact1.jpg"></Posts>
                  {/* <Posts name="Surprise" img="../surprise1.jpg"></Posts> */}
            </div>
        <footer>
        Made with <img src={logo} className="App-logo" alt="logo"/> in Berlin
        </footer>
        </div>
    )
  }
}
