import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';


const Navbar1 = () => {
    const location = useLocation() //это хук, внутри которого в виде объекта хранится инфа о текущей локации
       console.log(location);
    return (
        <Navbar>
        <Container>
            
            <Link to="/">
            <Navbar.Brand className={location.pathname === "/" ? "btn btn-warning" : "btn btn-light"} href="#home">Home</Navbar.Brand>
            </Link>
            <Link to="/create">
            <Navbar.Brand className={location.pathname === "/create" ? "btn btn-warning" : "btn btn-light"} href="#add">Create form</Navbar.Brand>
            </Link>
            <Link to="/contacts">
            <Navbar.Brand className={location.pathname === "/contacts" ? "btn btn-warning" : "btn btn-light"} href="#contacts">Contacts</Navbar.Brand>
            </Link>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Erkaiym Zh</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbar1;