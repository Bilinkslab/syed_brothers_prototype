import { Button, Card, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { useState } from "react";

export default function AddSite(props) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} backdrop="static" fullscreen>
        <Modal.Header closeButton>Add Site</Modal.Header>
        <Modal.Body>
          {currentPage === 1 && (
            <>
              <Card className="mb-3">
                <Card.Header>Site Information</Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              placeholder="Enter Address"
                              required
                            />
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <span className="text-secondary">
                            <u>Example:</u> 782-XXX
                          </span>
                        </Row>
                      </Col>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>Client</Form.Label>
                            <Form.Select required>
                              <option> Select Client...</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b className="text-primary" onClick={props.showAddClient}>
                            <u>Add New Client</u>
                          </b>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row>
                          <Col>
                            <Row className="mb-2">
                              <Form.Group>
                                <Form.Label>Area</Form.Label>
                                <Form.Control
                                  type="number"
                                  required
                                  placeholder="Enter Total Area"
                                />
                              </Form.Group>
                            </Row>

                            <Row className="ps-1">
                              <span className="text-secondary">
                                <u>Note:</u> Only numbers allowed
                              </span>
                            </Row>
                          </Col>
                          <Col>
                            <Row className="mb-2">
                              <Form.Group>
                                <Form.Label>Area Unit</Form.Label>
                                <Form.Select required>
                                  <option> Select Area Unit...</option>
                                </Form.Select>
                              </Form.Group>
                            </Row>
                            <Row className="ps-1">
                              <b className="text-primary" onClick={props.showAddUnit}>
                                <u>Add New Unit</u>
                              </b>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>Senior Supervisor</Form.Label>
                            <Form.Select required>
                              <option> Select Senior Supervisor...</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b className="text-primary" onClick={props.showAddSeniorSupervisor}>
                            <u>Add New Senior Supervisor</u>
                          </b>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>Junior Supervisor</Form.Label>
                            <Form.Select required>
                              <option> Select Junior Supervisor...</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b className="text-primary" onClick={props.showAddJuniorSupervisor}>
                            <u>Add New Junior Supervisor</u>
                          </b>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="pe-3 pull-right">
                      <Button onClick={() => setCurrentPage(currentPage + 1)}>
                        Next
                      </Button>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </>
          )}
          {currentPage === 2 && (
            <>
              <Card className="mb-3">
                <Card.Header>Purchaser Information</Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Select required>
                              <option> Select City...</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b className="text-primary" onClick={props.showAddCity}>
                            <u>Add New City</u>
                          </b>
                        </Row>
                      </Col>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>Purchaser</Form.Label>
                            <Form.Select required>
                              <option> Select Purchaser...</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b className="text-primary" onClick={props.showAddPurchaser}>
                            <u>Add New Purchaser</u>
                          </b>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>Raw Material</Form.Label>
                            <Form.Select required>
                              <option> Select Raw Material...</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b className="text-primary" onClick={props.showAddRawMaterial}>
                            <u>Add New Raw Material</u>
                          </b>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="pe-3 pull-right">
                      <Button>Add Purchaser</Button>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
              <Button
                className="me-3 mb-3"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>
              <Button
                className="me-3 mb-3"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Review
              </Button>
              <Card className="mb-3">
                <Card.Header>Purchaser(s) List</Card.Header>
                <Card.Body>
                  <Table striped responsive hover>
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Purchaser Name</td>
                        <td>City</td>
                        <td>Material</td>
                        <td>Delete</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Asad</td>
                        <td>Lahore</td>
                        <td>Cement</td>
                        <td>
                          <Button variant="danger">
                            <i className="fa fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </>
          )}
          {currentPage === 3 && (
            <>
              <Card className="mb-3">
                <Card.Header>Review Details</Card.Header>
                <Card.Body>
                  <Row className="mb-3">
                    <Col sm={12} lg={6}>
                      <b>Address: </b> ABC-123
                    </Col>
                    <Col sm={12} lg={6}>
                      <b>Client: </b> Haris Siddiqui
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={12} lg={6}>
                      <b>Area: </b> 1 Kanal
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={12} lg={6}>
                      <b>Senior Supervisor: </b> Abuzar
                    </Col>
                    <Col sm={12} lg={6}>
                      <b>Junior Supervisor: </b> Abu Bakar
                    </Col>
                  </Row>
                  <h5 className="text">Purchasers</h5>
                  <Table responsive hover striped>
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Purchaser Name</td>
                        <td>City</td>
                        <td>Material</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Asad</td>
                        <td>Lahore</td>
                        <td>Cement</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Button
                className="me-3 mb-3"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>
              <Button
                className="me-3 mb-3"
                variant="success"
                onClick={() => console.log("Request Initiate")}
              >
                Send Request
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
