// Menu e Rota

// importaçao do React
import React from "react";

// importaçao da rota 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { 
  MDBIcon
} from 'mdbreact';

// importaçao do Bootstrap
import { 
  Nav,
  Navbar 
} from 'react-bootstrap';

// importaçao dos aquivos para ser ultilizado no menu 

import Embarque from '../Pages/Embarque/embarque';
import Registro from '../Pages/Registro/registro';
import Login from '../Pages/Login/login';
import Cometa from '../Imagem/bus.png';


// importaçao do estilo do Menu 

import './menu.css';

// NavBar e Rotas

export default function Menu() {
  return (
    <Router>
      <div>
      <Navbar className="nav" collapseOnSelect expand="lg" variant="dark">
      <img 
        src={Cometa}
        alt="Viação Cometa"
        width="200"
        height="50"
        className="d-inline-block align-top"
        />
          <Navbar.Brand>Cometa</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="jesus"><MDBIcon icon="sign-in-alt" /> Login</Link>
              <Link to="/registro" className="jesus"><MDBIcon icon="clipboard"/> Registro</Link>
              <Link to="/embarque" className="jesus"><MDBIcon icon="th-list" /> Embarques</Link>
              {/* <Link to="/embarque" className="jesus"><MDBIcon icon="user-shield" /> Admin</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       
        {/* Direcionamento para as paginas */}

        <Switch>
          <Route path="/embarque">
            <Embarque />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}