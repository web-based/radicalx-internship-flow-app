import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import "./btn.css" 

function MainTitle() {
  return (

    <Container>
      <Stack gap={5}>
        <div className=""></div> {/*Stack is used to create the gap from the top of the website to the title & button*/}
        <div className=""></div>
      </Stack>
      <Row>
        <Col md={{ span: 7, offset: 2 }} > {/* Span = Length on the "invis box" and offest is left to right*/}
          <h4>
            <b>Internship</b>
          </h4>
        </Col>
        <Col md={{span: 2, offset: 1}}>
          <Button className="home-title-btn" size="sm">
            + Create New Internship
          </Button>
        </Col>
      </Row>
    </Container>


  )
}

export default MainTitle