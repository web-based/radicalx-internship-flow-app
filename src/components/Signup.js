import React, { useRef } from 'react'
import { Card, Button, Form } from 'react-bootstrap'

function Signup() {
   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="paswword">
              <Form.Label>PassWord</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100"  type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <dic className="w-100 text-center mt-2">
        Already have an account ? Log In 
      </dic>
    </>
  )
 }

 export default Signup
