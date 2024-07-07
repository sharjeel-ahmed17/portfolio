import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './hero.css'; // Create a CSS file for custom styles

const Hero = () => {
    return (
        <div className="hero">
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1 className="display-4">Hello, I'm a Mern Stack Developer</h1>
                        <p className="lead">Building modern and responsive web applications</p>
                        <Button variant="primary" href="#about">Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
