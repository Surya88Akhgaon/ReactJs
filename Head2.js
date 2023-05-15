import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';
//import Dropdown from 'react-bootstrap/Dropdown';

function Head2() {
  return (
    <Container>     
        <Row style={{margin:'1rem'}}>
          <Col sm={4}>
          <Figure>
                 <Figure.Image
                        width={371}
                        height={280}
                        alt="171x180"
                        src="./H2_logo.png"
                    />
      
                 </Figure>
          </Col>
          <Col sm={2}>
           
          </Col>
          <Col sm={6}>
          <Breadcrumb direction="horizontal" gap={3} style={{margin:'1rem'}}>
                        <Breadcrumb.Item ><NavLink to="/contact">About Us</NavLink></Breadcrumb.Item>
                            <Breadcrumb.Item ><NavLink to="/appointment">Appointment</NavLink>                          
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                            <NavLink to="/gallery">Gallery</NavLink>
                            </Breadcrumb.Item>
                            
                        <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
                    </Breadcrumb>
           </Col>
        </Row>
    </Container>
  );
}

export default Head2;