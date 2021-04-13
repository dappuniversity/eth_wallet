import { useHistory } from 'react-router-dom';
import React, {useState} from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { auth } from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChange = e => {
            setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const history = useHistory();

    const handleSubmit = e => {
            e.preventDefault();
    
            auth
                .signInWithEmailAndPassword(email, password)
                .then(auth => {
                    history.push('/')
                })
                .catch(error => alert(error.message))
    
    };

    const handleClick = e => {
        history.push('/Register')
    };
    return (
        <div>
            <Container align="center">
                <div className="login-form" style={{height: "425px"}}>
                    <div className="login-header text-center">
                        <h2 className="login-header-name">LOGIN</h2>
                    </div>
                    <Form align="left" style={{paddingTop: "20px"}} onSubmit={handleSubmit}>
        
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your Email-ID" onChange={handleEmailChange} required/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Type A Password" onChange={handlePasswordChange} required/>
                        </Form.Group>

                        <div className="center">
                        <Button variant="primary" type="submit" style={{width: "100px",background: "#1C4D06", fontSize: "20px" ,height: "50px"}}>
                            LOGIN
                        </Button>
                        <br />
                        <br />
                        <br />
                        <a className="login" href="/Register" onClick={handleClick}>Don't Have An Account, Create Now!!</a>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Login
