import React, { useEffect, useState } from 'react'
import MainScreen from '../MainScreen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import { useDispatch, useSelector} from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { register } from '../../actions/userActions';

function RegisterPage({history}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const {loading, error, userInfo} = userRegister;
    useEffect(() => {
        if(userInfo){
            window.location.href = '/mytasks';
        }
    }, [userInfo]);
    const submitHandler = async (e) => {
        e.preventDefault(); 
        if(password !== confirmPassword){
            setMessage('Passwords Do Not Match');
        } else {
            dispatch(register(name, email, password));
        }
    }
  return (
    <MainScreen title='Register'>
        <div>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form  onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <Row className="py-3">
                    <Col>
                        Already Have an Account? <Link to='/login'>Login Here</Link>
                    </Col>
                </Row>
    </div>
    </MainScreen>
  )
}

export default RegisterPage