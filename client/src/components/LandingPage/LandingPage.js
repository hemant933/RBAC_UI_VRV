import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = ({history}) => {
    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            window.location.href = '/mytasks';
        }
    }, [history]);

    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1 className="landing-title">Welcome to Task Master</h1>
            </header>
            <div className="button-group">
                <a href='/login'>
                <Button variant="primary" className="landing-button mr-2">Login</Button>
                </a>
                <a href='/register'>
                <Button variant="secondary" className="landing-button">Signup</Button>
                </a>
            </div>
        </div>
    );
}

export default LandingPage;
