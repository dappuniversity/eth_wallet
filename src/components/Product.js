import React from "react";
import Card from 'react-bootstrap/Card';
//import productImage from "../tomatoes.jpg";
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'

var publicKey;

function Product(props){
  const history = useHistory();
  const handleClick = () => {
    history.push('/payment')
    publicKey = props.product.account_no
  }
    return <Grid item lg={4} xs={12} md={6} className="grid-style">
              <Card className="card-style">
                <Card.Img variant="top" className="card-img" src={props.product.image} />
                <Card.Body>
                  <Card.Title className="card-title">
                      {props.product.title}
                  </Card.Title>
                  <Card.Text className="card-text">
                     <p className="mrp-style">MRP:{props.product.price}</p>
                     <p className="desc-style">{props.product.desc}<br/><strong>Posted on {props.product.date} by {props.product.owner}</strong><br />{props.product.city},{props.product.state}</p>
                      <p>Contact No: {props.product.phone}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button size="lg" variant="success" onClick={handleClick}>Buy</Button>
                </Card.Footer>
              </Card>
           </Grid>
}

export {publicKey} 
export default Product;