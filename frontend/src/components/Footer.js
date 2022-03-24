import React from 'react'
import {Navbar ,Nav ,Container,Row,Col} from 'react-bootstrap'
function Footer() {
    return (
        <div>
            <footer>
            <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect >
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Row>
                        <Col className="text-center py-3">&copy; Reda &copy; Mihradi &copy; EMSI &copy; </Col>
                    </Row>
                    
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </footer>
        </div>
    )
}

export default Footer
