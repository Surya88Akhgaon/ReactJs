import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Head1 from './Head1';
import Head2 from './Head2';
//import { useNavigate } from 'react-router-dom';



function Register() {
  
  return (
    <>
     
      <Head1/> 
      <Head2/>
  <Container>
      <Row>
        <Col sm={10} style={{padding:'4rem' }}>
         <Card style={{padding:'3rem', width: '40rem'}}>                        
                     
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Card>
   </Col>
   </Row>
   </Container>
   </>
  );
}

export default Register;