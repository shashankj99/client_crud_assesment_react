import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateClilent from "./components/CreateClient";
import ClientList from "./components/ClientList";
import ClientDetail from "./components/ClientDetail";
import NavBar from "./components/Headers/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<ClientList />} />
                  <Route path="/clients" element={<ClientList />} />
                  <Route path="/clients/create" element={<CreateClilent />} />
                  <Route path="/clients/:id" element={<ClientDetail />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
