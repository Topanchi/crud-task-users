// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col,NavDropdown } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom';

import CreateTask from "./Components/create-task.component";
import EditTask from "./Components/edit-task.component";
import TaskList from "./Components/task-list.component";

// App Component
const App = () => {
  return (
   
      <div className="App">
        <header className="App-header">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/create-task">Create task</Nav.Link>
                <Nav.Link eventKey={2} href="/">
                  Task list
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={ <TaskList />} />
              <Route path='/create-task' element={ <CreateTask />} />
              <Route path='/edit-task/:id' element={ <EditTask />} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
};
  
export default App;