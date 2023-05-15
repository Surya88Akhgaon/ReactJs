import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'reactstrap';
import './index.css';

function Head3() {
  return (
    <Container >
        <Row>
            <Col sm={6} style={{padding:'1rem'}}>
                            <Card style={{padding:'.2rem', width: '30rem' }}>
                                <Card.Img variant="top" src="./G6.jpeg" />
                            </Card>
            </Col>
            <Col sm={6} style={{padding:'1rem'}}>
            <h3> DR VINISHA PANDEY DENTISTRY</h3>
            <p style={{color:'black'}} >  <h5>
Welcome to Dr. Vinisha Pandey Dentistry, where we endeavour to give you with high-quality dental care unlike any other. Our specialised team and staff are comforting, genuine, and completely dedicated to your comfort and well-being.</h5></p>

<p style={{color:'black'}}> With 12 years of clinic experience, Dr.VinishaPandey is delivering quality dental care in Kanpur, Uttar Pradesh, the city known as "Manchester of India."
            </p>
            
            </Col>
        </Row>
    </Container>
  );
}

export default Head3;