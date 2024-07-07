import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <Container id="skills" className="my-5">
            <h2>Skills</h2>
            <Row>
                <Col>
                    <h5>React</h5>
                    <ProgressBar now={80} label="80%" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Node.js</h5>
                    <ProgressBar now={75} label="75%" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Express</h5>
                    <ProgressBar now={70} label="70%" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>MongoDB</h5>
                    <ProgressBar now={65} label="65%" />
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;
