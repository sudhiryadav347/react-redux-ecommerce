import React, { useState } from "react";
import './App.css';
import { Row, Container } from "react-bootstrap";
import Logo from "./Components/UI/Logo";
import Navigationbar from "./Components/UI/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Pagenotfound from "./Components/Pagenotfound";
import HeaderCounter from "./Components/HeaderCounter/HeaderCounter";
import Cart from "./Components/Cart/Cart";

function App() {

  return (
    <>
      <header className='App-header'>
        <Container className='p-3'>
          <Row>
            <Logo />
            <HeaderCounter />
           <Cart />
          </Row>
        </Container>
      </header>
      <Navigationbar />
      <Container className='pt-4'>
      <Routes>
					<Route path='about' element={<About />} />
					<Route
						path='/'
						element={<Home />}
					/>
					<Route path='*' element={<Pagenotfound />} />
				</Routes>
      </Container>
    </>
  );
}

export default App;
