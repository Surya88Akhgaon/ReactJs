import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbPhone } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import Figure from 'react-bootstrap/Figure';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Head3 from './Head3';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
   <>  
   
    <div>
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
    </div>

    <div>
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

    </div>
    <div>
        <Head3/>
    </div>
     

    </>
  );
}

export default Header;