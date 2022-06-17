import React from 'react'
import { Navbar, Nav, Form, Button, Table } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { getInvoices } from './data'
import JsonData from './exampleSumar.json'

const Home = () => {
  let invoices = getInvoices()

  return (
    <>
      {/* <Navbar bg="primary" variant="dark">
        <Container className=" w-100">
          <Navbar.Brand className="mx-auto order-0" href="#home">
            Sumar
          </Navbar.Brand>
        </Container>
      </Navbar> */}

      <Container>
        <section className="py-2 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-8 col-md-8 mx-auto">
              <img
                src="https://www.hospitaldelabaxada.com.ar/sites/default/files/novedades/Nota%20Sumar.jpg"
                width="200"
                height="150"
              />
              <div className="d-flex flex-column">
                <h3 className="fw-light">Beneficiario: Juan PEREZ ROMERO</h3>
                <span className="lead text-muted">CUIL : 20-1378962-4</span>
                <span className="lead text-muted">
                  Clave de beneficiario SUMAR : 1603115364855856
                </span>
              </div>
              {/* <p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>CUIT</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar CUIT" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form>
              </p> */}
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Prestación</th>
              <th>Efector</th>
            </tr>
          </thead>
          <tbody>
            {JsonData ? (
              JsonData.map((info) => {
                return (
                  <tr>
                    <td>{info.Fecha}</td>
                    <td>{info.Prestacion}</td>
                    <td>{info.Efector}</td>
                  </tr>
                )
              })
            ) : (
              <h4>No hay datos para mostrar</h4>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Home
