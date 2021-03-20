import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { Container, Row, Col } from 'react-bootstrap';
import StatisticsBar from './StatisticsBar.js'

class Statistics extends React.Component {
    render()
    {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Transaction Amount(in INR)"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: [
                { y: 48.2, label: "Cereal And Pulses" },
                { y: 27.1, label: "Fruits" },
                { y: 24.5, label: "Vegetables" }
            ]
        }]
    }

    return (
        <div>
            <h1 className="text-center my-4 heading">Statistics</h1>
                <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="pie-chart">
                            <CanvasJSChart options = {options}/>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="pie-chart">
                            <StatisticsBar />
                        </div>
                    </Col>
                </Row>
                </Container>
        </div>
    );
    }
}

export default Statistics;