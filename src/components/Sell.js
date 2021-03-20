import React,{ useState } from 'react';
import { Container, Button, Col, Row, Form} from 'react-bootstrap';

function Sell() {
    const [sellerName, setsellerName] = useState('');
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categorySelected,setCategorySelected]=useState('Cereal or Pulse');
    const [publicKey, setpublicKey] = useState('');
    const [city, setCity] = useState('');
    const [state, setState2] = useState('');
    
    const handleSellerNameChange = e => {
        setsellerName(e.target.value); 
    };

    const handleItemNameChange = e => {
        setItemName(e.target.value);
    };

    const handlePriceChange = e => {
        setPrice(e.target.value);
    };

    const handleDescriptionChange = e => {
        setDescription(e.target.value);
    };

    const onChangeCategory = (e) =>{  
        setCategorySelected(e.target.value);
    }

    const handlepublicKeyChange = e => {
        setpublicKey(e.target.value);
    };

    const handleCityChange = e => {
        setCity(e.target.value);
    };

    const handleStateChange = e => {
        setState2(e.target.value);
    };


    const handleSubmit = (e) =>{ 
        e.preventDefault();
        if(description.length > 49 && description.length < 91 ){
            alert("You have successfully posted your product");
            console.log(sellerName)
            console.log(itemName)
            console.log(price)
            console.log(description)
            console.log(categorySelected)
            console.log(publicKey)
            console.log(city)
            console.log(state)
        }
        else{
            alert("Your item's decription must be 50-90 characters long.");
        }  
    }


    return (
        <div className="mt-5">

            <div className="Sell-Form">
                <div className="Sell-title">
                    <strong>Enter your Product Details</strong>
                </div>
                <Form onSubmit={handleSubmit} className="px-4">

                    <Form.Group as={Row} controlId="SellerName">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Seller's Name</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" placeholder="Your Name" onChange={handleSellerNameChange} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="ItemName">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Item Name</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" placeholder="Item Name" onChange={handleItemNameChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Price">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Price</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" placeholder="Item Price" onChange={handlePriceChange} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Description">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Item Description</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control as="textarea" rows={3} className="Sell-inputs" placeholder="Item Description" onChange={handleDescriptionChange} required maxLength="90"/>                            
                            <Form.Text id="Description-limit" muted>
                                Your item's decription must be 50-90 characters long.
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Category">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4"><strong>Categories</strong> </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" as="select" defaultValue="Choose a Category" onChange={onChangeCategory}>
                                <option>Cereal or Pulse</option>
                                <option>Vegetable</option>
                                <option>Fruit</option>
                            </Form.Control>
                        </Col>
                        
                    </Form.Group>

                    <Form.Group as={Row} controlId="PublicKey">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Public Key</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" placeholder="Your Public key of Blockchain" onChange={handlepublicKeyChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="City">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>City</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" placeholder="City" onChange={handleCityChange} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="State">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>State</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" placeholder="State" onChange={handleStateChange} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="ItemImage">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Item Image</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.File id="exampleFormControlFile1" required/>
                            <Form.Text id="File-extension" muted>
                                Add image having .png, .jpg or .jpeg extensions
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <div className="text-center">
                        <Button className="Sell-submit" type="submit" >
                            Submit
                        </Button>
                    </div> 

                </Form>           
            </div>
            
        </div>
    )
}

export default Sell;