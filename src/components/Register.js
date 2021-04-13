import React, {useState} from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { auth,db } from '../firebase';
import { useHistory } from 'react-router-dom';



function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState2] = useState('');
    const [publicKey, setpublicKey] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const history = useHistory();

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleEmailChange = e => {
            setEmail(e.target.value);
    };

    const handlePhoneChange = e => {
        setPhone(e.target.value);
    };

    const handleCityChange = e => {
        setCity(e.target.value);
    };

    const handleStateChange = e => {
        setState2(e.target.value);
    };

    const handlepublicKeyChange = e => {
        setpublicKey(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleconfirmPasswordChange = e => {
        setconfirmPassword(e.target.value);
    };


    const handleSubmit = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then(
                (auth)=> {
                    console.log(auth);
                    if(auth) {
                        const userData = {
                            name,
                            phone,
                            city,
                            state,
                            publicKey
                        }
                        db
                        .collection('users')
                        .doc(auth.user.uid)
                        .set(userData)

                        history.push('/login');
                    }
                }
            )
            .catch(err => alert(err.message))
        
    };
    return (
        <div>
            <Container align="center">
                <div className="register-form">
                    <div className="register-header text-center">
                        <h2 className="register-header-name">REGISTER</h2>
                    </div>
                    <Form align="left" style={{paddingTop: "20px"}} onSubmit={handleSubmit}>
                        
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Your Name" onChange={handleNameChange} required/>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your Email-ID" onChange={handleEmailChange} required/>
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control type="phone" placeholder="Your Mobile Number" onChange={handlePhoneChange} required/>
                        </Form.Group>
                        
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="city" placeholder="Your City" onChange={handleCityChange} required/>
                        </Form.Group>

                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="state" placeholder="Your State" onChange={handleStateChange} required/>
                        </Form.Group>

                        <Form.Group controlId="publicKey">
                            <Form.Label>Public Key</Form.Label>
                            <Form.Control type="text" placeholder="Your Public Key of Blockchain" onChange={handlepublicKeyChange} required/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Type A Password" onChange={handlePasswordChange} required/>
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label style={{marginTop: "1px" }}>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Re-Type The Password" onChange={handleconfirmPasswordChange} required/>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicCheckbox" align="center">
                            <Form.Check type="checkbox" label="Agree to the terms and conditions." required/>
                        </Form.Group>
                        
                        <div className="center">
                        <Button variant="primary" type="submit" style={{width: "130px",background: "#1C4D06", fontSize: "25px" ,height: "50px"}}>
                            SUBMIT
                        </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Register