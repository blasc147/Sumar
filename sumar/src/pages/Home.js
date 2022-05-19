import React from 'react';
import { Navbar, Nav, Form, Button, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { getInvoices } from "./data";


const Home = () => {
    let invoices = getInvoices();

    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Sumar</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
                </Container>
            </Navbar>

            <Container>
            <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Ponete a hacer la API</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>CUIT</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar CUIT" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                </Form>
                        </p>
                    </div>
                    </div>
                </section>
            </Container>

            <Container>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Home