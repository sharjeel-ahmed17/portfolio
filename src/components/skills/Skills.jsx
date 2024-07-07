// import React, { useEffect, useRef } from 'react';
// import { Container } from 'react-bootstrap';
// import { Radar } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     RadialLinearScale,
//     PointElement,
//     LineElement,
//     Filler,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// ChartJS.register(
//     RadialLinearScale,
//     PointElement,
//     LineElement,
//     Filler,
//     Tooltip,
//     Legend
// );

// const data = {
//     labels: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS', 'JavaScript'],
//     datasets: [
//         {
//             label: 'Skill Level',
//             backgroundColor: 'rgba(2, 117, 216, 0.2)',
//             borderColor: '#0275d8',
//             pointBackgroundColor: '#0275d8',
//             pointBorderColor: '#fff',
//             pointHoverBackgroundColor: '#fff',
//             pointHoverBorderColor: '#0275d8',
//             data: [80, 75, 70, 65, 90, 85],
//         },
//     ],
// };

// const Skills = () => {
//     const chartRef = useRef(null);

//     useEffect(() => {
//         const chartInstance = chartRef.current;

//         return () => {
//             if (chartInstance) {
//                 chartInstance.destroy();
//             }
//         };
//     }, []);

//     return (
//         <Container id="skills" className="my-5">
//             <h2>Skills</h2>
//             <Radar ref={chartRef} data={data} />
//         </Container>
//     );
// };

// export default Skills;
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
