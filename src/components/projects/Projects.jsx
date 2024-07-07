import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
    return (
        <Container id="projects" className="my-5">
            <h2>Projects</h2>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s" />
                        <Card.Body>
                            <Card.Title>Project One</Card.Title>
                            <Card.Text>
                                Description of project one.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s" />
                        <Card.Body>
                            <Card.Title>Project Two</Card.Title>
                            <Card.Text>
                                Description of project two.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s" />
                        <Card.Body>
                            <Card.Title>Project Three</Card.Title>
                            <Card.Text>
                                Description of project three.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;
