import React,{ useState } from 'react';
import {Button, Col, Row, Form} from 'react-bootstrap';
import { db,storage } from "../firebase";
import { useStateValue } from "../StateProvider";
import productList from './productList'

function Sell() {
    const [sellerName, setsellerName] = useState('');
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category,setCategory]=useState('Cereal or Pulse');
    const [publicKey, setpublicKey] = useState('');
    const [city, setCity] = useState('');
    const [state, setState2] = useState('');
    const [image,setImage] = useState(null);
    const [url,setUrl] = useState('');
    // const [dataStored,setDataStored] = useState('')

    const [{user},dispatch] = useStateValue();
    
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
        setCategory(e.target.value);
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

    const addFile = e => {
        console.log(e.target.files[0]);
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    

    const handleSubmit = (e)=> { 
        e.preventDefault();
        if(description.length < 91 ) {}

            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
              "state_changed",
              snapshot => {},
              error => {
                console.log(error);
              },
              () => {
                storage
                  .ref("images")
                  .child(image.name)
                  .getDownloadURL()
                  .then(url => {
                    setUrl(url);
                    console.log(url);
                    const itemData = {
                        sellerName,
                        itemName,
                        price,
                        description,
                        category,
                        publicKey,
                        city,
                        state,
                        itemImageUrl : url,
                        sellerId:user.uid,
                        timeStamp : new Date()
                    }
        
                    console.log(itemData);
                    
                    const listItemData = {
                        image:url,
                        category,
                        title:itemName,
                        price,
                        desc:description,
                        date:new Date().toISOString(),
                        owner:sellerName,
                        account_no:publicKey,
                        city,
                        state
                    }

                    productList.push(listItemData)
                    
                    db
                    .collection('Items')
                    .add(itemData)  

                    alert("Product ad posted successfully !");

                  });
              }
            );
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
                            <Form.File type="file" onChange={addFile} id="exampleFormControlFile1" required/>
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