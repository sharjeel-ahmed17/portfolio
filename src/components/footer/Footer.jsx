import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <Container>
                <Row>
                    <Col>
                        <p>&copy; {new Date().getFullYear()} Full Stack Developer. All Rights Reserved.</p>
                        <div>
                            <a href="https://github.com/yourprofile" className="text-white mx-2"><FaGithub /></a>
                            <a href="https://linkedin.com/in/yourprofile" className="text-white mx-2"><FaLinkedin /></a>
                            <a href="https://twitter.com/yourprofile" className="text-white mx-2"><FaTwitter /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
