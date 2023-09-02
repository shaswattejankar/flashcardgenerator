import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import React from 'react'
import { Container } from 'react-bootstrap';
import './navbar.css';

const navbar = () => {
  return (
    <>
    <Container className="container1"> 
        <div className='c container-fluid whole px-3 align-content-center'>
        <p className='d-flex align-right ps-3 mt-5 title'><b>Create Flashcard</b></p>
            <div className="navv d-flex flex-row">
            <Navbar className="navbar">
                <Container>
                    <Nav className="nav-items ms-auto p">
                        <NavLink to="/" className="aa"><b>Create New</b></NavLink>
                        <NavLink to="flashes" className="aa aa2"><b>My Flashcards</b></NavLink>
                        <NavLink to="flash-details"className="aa aa2"></NavLink>
                    </Nav>
                </Container>
        
            </Navbar>
            </div>
        </div>
    </Container>
    </>
    
     
  );
}

export default navbar


