// import React from 'react'
import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap'


const Header = ()=>{
    return(
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <NavbarBrand href="#" >Bootstrap</NavbarBrand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <nav className='ms-auto'>
                        <Nav.Link href="#">
                            Home
                        </Nav.Link>
                        
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;