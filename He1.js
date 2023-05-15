import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbPhone } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";

function He1() {
  return (
    <Container fluid className='bg-primary shadow-1-strong'>
      <Row >
        <Col sm={4} style={{padding:'1rem'}}>
               <div>
                   <TbPhone fill='#ffff'/>  6388620160
                </div>           
          </Col>
          <Col sm={4}></Col>
        
          <Col sm={4} style={{padding:'1rem'}}>
                 <div>
                   <HiOutlineMailOpen fill='#ffff'/>  drvinishapandeydentistry@gmail.com
                 </div>  
          </Col>
        </Row>        
    </Container>
  );
}

export default He1;