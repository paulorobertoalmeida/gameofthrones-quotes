import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Game Of Thones</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Card style={{ width: '18rem', alignItem: "center" }}>
  <Card.Img variant="top" src="https://i0.wp.com/espalhafactos.com/wp-content/uploads/2013/06/gp1c316ch1f5i0.jpeg?w=256&ssl=1/256px256" />
  <Card.Body>
    <Card.Title>Game of Thrones</Card.Title>
    <Card.Text>
      "A GOT quote" - Mando
    </Card.Text>
    <Button variant="primary">Click Here</Button>
  </Card.Body>
</Card>
</Container>
);

export default App;