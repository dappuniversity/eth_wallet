import React from "react";
import Card from 'react-bootstrap/Card';
//import productImage from "../tomatoes.jpg";
import Grid from '@material-ui/core/Grid';


function Product(props){
    return <Grid item lg={4} className="grid-style">
              <Card className="card-style">
                <Card.Img variant="top" className="card-img" src={props.product.image} />
                <Card.Body>
                  <Card.Title className="card-title">
                      {props.product.title}
                  </Card.Title>
                  <Card.Text className="card-text">
                     <p className="mrp-style">MRP:{props.product.price}</p>
                     <p className="desc-style">{props.product.desc}<br/><strong>Posted on {props.product.date} by {props.product.owner}</strong></p>
                  </Card.Text>
                 <Card.Footer className="card-footer">Account No:-<br/><strong>{props.product.account_no}</strong><br/>{props.product.city},{props.product.state}</Card.Footer>
                </Card.Body>
              </Card>
           </Grid>
}

export default Product;