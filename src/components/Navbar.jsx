import React from 'react';
import { Container, Navbar as BootstrapNavbar } from 'react-bootstrap';

function Navbar({props}) {
    // console.log(props);
    return (
        <BootstrapNavbar bg="light" expand="lg" className="justify-content-end" >
            <Container style={{ backgroundImage: 'url(/other_ba.jpg)', backgroundSize: 'cover', minHeight: '45vh' }}>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <a className="nav-link text-end" href="#" onClick={() => props('Home')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-end" href="#" onClick={() => props('About')}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-end" href="#" onClick={() => props('RPS')}>Rock Paper Scissors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-end" href="https://github.com/MrMohamedtriki" target='_blank' onClick={() => props('Github')}>Github</a>
                        </li>
                    </ul>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;
