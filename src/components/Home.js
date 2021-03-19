import React from 'react';
import { useHistory } from "react-router-dom";
import { Jumbotron, Container, Card, Button, Col, Row} from 'react-bootstrap';

function Home() {

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/payment`; 
        history.push(path);
    }

    return (
        <div> 
            <div className="statistics-strip">
                View our statistics page and then donate on this public key 0x7691B75d3aAED69F63d15bDe4490d926CAD94C93
                <Button className="mx-4 my-2 statistics-button" variant="info" onClick={routeChange}>Statistics</Button>    
            </div> 
                    
            <Jumbotron fluid className="jumbotron">
                <Container >                       
                    <h1 className="agroworld">Agro World</h1>
                </Container>
            </Jumbotron>
            
        </div>
        
    )
}

export default Home
