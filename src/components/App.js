import React from 'react'
import MyNavbar from './MyNavbar';
import { Container } from 'react-bootstrap';
import Signup from './Signup'


function App() {
  return (

    <MyNavbar />
  )
   <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
  );
}

export default App;
