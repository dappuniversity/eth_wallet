import React, { useState } from 'react';
import orderList from "./orderList";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Orders() {

    const [clicked,setClick]=useState(false);
    const [buttonName,setButton]=useState("");

    function handleClick(event){
        setClick(true);
        setButton(event.target.id);
    }
    return (
        <div>
            <h1 className="text-center mt-4 heading">Orders</h1>
            <div className="center">
            <Button variant="primary" className="order-button" id="sold" onClick={handleClick}>
                SOLD
            </Button>
            <Button variant="primary" className="order-button" id="bought" onClick={handleClick}>
                BOUGHT
            </Button>
            </div>
              {
                clicked ? orderList.map(eachOrder=> {
                    return <Container fluid="xs" className="order-card">
                               <Card>
                                   <Row>
                                      <Col lg={5}>
                                         <Card.Img className="order-image" src={eachOrder.image}/>
                                      </Col>
                                      <Col lg={5}>
                                        <Card.Body>
                                         <Card.Title className="order-title">{eachOrder.title}</Card.Title>
                                         <Card.Text className="order-text">
                                            <p className="mrp-style" style={{fontSize:"1.5rem"}}>{buttonName === "sold" ? "MRP:-" : "Amount Spent:-"}</p>
                                            <p className="desc-style" style={{fontSize:"1.2rem"}}>{buttonName === "sold" ? "Buyer Name:Shreyas Poojari" : "Seller Name:Rahim"}</p>
                                         </Card.Text>
                                         <Card.Footer className="card-footer">
                                            <p>Seller Key:xxxxx</p>
                                            <p>Buyer Key:yyyyyy</p>
                                            <strong><p>{buttonName === "sold" ? "Posted on 23/03/2021" : "Ordered on 23/03/2021"}</p></strong>
                                         </Card.Footer>
                                        </Card.Body>
                                     </Col>
                                   </Row>
                               </Card>
                           </Container> 
                           }):null
                    }  
        </div>
    )
}

export default Orders;