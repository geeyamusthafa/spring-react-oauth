import React from 'react';
import { Container } from 'reactstrap';

const Login = () => (
    <Container>
        <a className="btn btn-primary btn-block" href="/login/facebook">
            <i className="fa fa-facebook-square"></i> Facebook
        </a>
        <a className="btn btn-danger btn-block" href="/login/google">
            <i className="fa fa-google-plus"></i> Google
        </a>
    </Container>
);

export default Login;