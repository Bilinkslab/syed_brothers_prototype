import { Button, Card, Col, Form, Modal, Row, Table } from "react-bootstrap";

export default function AddSite(props) {
  return (
    <>
      <Modal show="false" fullscreen>
        <Modal.Header closeButton>Add Site</Modal.Header>
        <Modal.Body>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Site Information</Card.Title>
              <Form>
                <Row>
                  <Col className="mb-3" lg={6} mid={12}>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="Enter Address" required />
                    </Form.Group>
                  </Col>
                  <Col className="mb-3" lg={6} mid={12}>
                    <Form.Group>
                      <Form.Label>Client</Form.Label>
                      <Form.Select required>
                        <option> Select Client...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3" lg={6} mid={12}>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>Area</Form.Label>
                          <Form.Control
                            type="number"
                            required
                            placeholder="Enter Total Area"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>Area Unit</Form.Label>
                          <Form.Select required>
                            <option> Select Area Unit...</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="mb-3" lg={6} mid={12}>
                    <Form.Group>
                      <Form.Label>Senior Supervisor</Form.Label>
                      <Form.Select required>
                        <option> Select Senior Supervisor...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3" lg={6} mid={12}>
                    <Form.Group>
                      <Form.Label>Junior Supervisor</Form.Label>
                      <Form.Select required>
                        <option> Select Junior Supervisor...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Purchaser Information</Card.Title>
              <Form>
                <Row>
                  <Col className="mb-3" lg={6} mid={12}>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Select required>
                        <option> Select City...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col className="mb-3" lg={6} mid={12}>
                    <Form.Group>
                      <Form.Label>Purchaser</Form.Label>
                      <Form.Select required>
                        <option> Select Purchaser...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button>Add Purchaser</Button>
              </Form>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
                <Card.Title>Purchaser(s) List</Card.Title>
                <Table responsive hover striped>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>#</td>
                        </tr>
                    </thead>
                </Table>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}
