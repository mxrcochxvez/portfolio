import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      title: "Marco Chavez",
      headerLinks: [
        { title: "Home", path: "/"},
        { title: "About", path: "/about"},
        { title: "Content", path: "/contact"}
      ],
      home: {
        title: "Building Powerful Web Apps",
        subTitle: "Apps to keep your business moving forwards.",
        text: "See what I am working on."
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Talk"
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Marco Chavez</NavBar.Brand>

            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
