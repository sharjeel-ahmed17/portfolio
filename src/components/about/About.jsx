import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container id="about" className="my-5">
            <Row>
                <Col>
                    <h2>About Me</h2>
                    <p>
                        I am a full stack developer with experience in building web applications
                        using technologies like React, Node.js, Express, and MongoDB. I enjoy
                        learning new technologies and improving my skills.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
