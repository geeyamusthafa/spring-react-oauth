import React from 'react';
import { Container, Button } from 'reactstrap';

let Logout = ({userName, signOut}) => (
    <Container>
        <span>Welcome {userName} </span>
        <Button color="default" onClick={signOut}>Log out</Button>
    </Container>
);

export default Logout;