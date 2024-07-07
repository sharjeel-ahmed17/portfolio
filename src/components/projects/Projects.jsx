import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { FaLink } from 'react-icons/fa';

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const AnimatedCard = styled(Card)`
  animation: ${bounceAnimation} 1s ease;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const LinkIcon = styled.a`
  color: white;
  font-size: 2rem;
  z-index: 1;
`;

const ProjectImage = styled(Card.Img)`
  width: 100%;
  height: 200px; /* Fixed height for all images */
  object-fit: cover; /* Maintain aspect ratio */
`;

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const projects = [
        {
            title: 'Calculator',
            description: 'Description of project one.',
            imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-501e1f5cbe2ff23a1dcce9bef3413d30-lq',
            link: 'https://example.com/project1',
        },
        {
            title: 'Todo App',
            description: 'Description of project two.',
            imageUrl: 'https://images.ctfassets.net/lpvian6u6i39/GtD3qzHrBIgVZJNIJBlO0/8610e2883df2dec28305841aa1ddd2ae/todo-app.png',
            link: 'https://example.com/project2',
        },
        {
            title: 'Bakery Site',
            description: 'Description of project three.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYa2GHzOVM4YzXodvusUek3j31lervKKrLw&s',
            link: 'https://example.com/project3',
        },
        // Add more projects here
        {
            title: 'Project Four',
            description: 'Description of project four.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://example.com/project4',
        },
        {
            title: 'Project Five',
            description: 'Description of project five.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://example.com/project5',
        },
        {
            title: 'Project Six',
            description: 'Description of project six.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://example.com/project6',
        }
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <Container id="projects" className="my-5">
            <h2>Projects</h2>
            <Row>
                {displayedProjects.map((project, index) => (
                    <Col md={4} key={index}>
                        <AnimatedCard>
                            <ProjectImage variant="top" src={project.imageUrl} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                            </Card.Body>
                            <Overlay className="overlay">
                                <LinkIcon href={project.link} target="_blank" rel="noopener noreferrer">
                                    <FaLink />
                                </LinkIcon>
                            </Overlay>
                        </AnimatedCard>
                    </Col>
                ))}
            </Row>
            <div className="text-center mt-4">
                <Button variant="primary" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show Less' : 'See All Projects'}
                </Button>
            </div>
        </Container>
    );
};

export default Projects;
