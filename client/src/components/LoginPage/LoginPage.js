import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MainScreen from '../MainScreen';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import { useDispatch, useSelector} from 'react-redux';
import { login } from '../../actions/userActions';
function LoginPage({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;
    useEffect(() => {
        if(userInfo){
            window.location.href = '/mytasks';
        }
    }, [userInfo]);
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };
    return (
        <MainScreen title='Login'>
            <div>
                {loading && <Loading />}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        New Customer? <Link to='/register'>Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginPage