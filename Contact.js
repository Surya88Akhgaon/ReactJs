import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head1 from './Head1';
import Head2 from './Head2';


function Contact() {
  return (
    <>
      <Head1/> 
      <Head2/>
   
    <Container>    
        <Row style={{margin:'1rem'}}>
          <Col sm={4}>
            <p>
            In my example, I link the landing page with two other "pages" (which are actually just components) called Shop and About.
            </p>
          </Col>
          <Col sm={2}>
            <p>
                First, you'll need to set up your app to work with React Router. Everything that gets rendered will need to go inside the element, so wrap your App in those first. It's the component that does all the logic of displaying various components that you provide it with.
            </p>
          </Col>
          <Col sm={6}>
              <p>
                Subhi is here.
                </p>  
           </Col>
        </Row>
    </Container>
    </>
  );
}

export default Contact;