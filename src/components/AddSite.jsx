import { Button, Card, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { useState } from "react";

export default function AddSite(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    address: "",
    client: "",
    area: "",
    area_unit: "",
    supervisor_sr: "",
    supervisor_jr: "",
    purchasers: [],
  });

  const [myPurchaser, setMyPurchaser] = useState({
    purchaser: "",
    city: "",
    material: "",
  });

  const addPurchaserToList = (e) => {
    e.preventDefault();
    let purs = form.purchasers;
    purs.push(myPurchaser);
    setForm({ ...form, purchasers: purs });
  };

  const deletePurchaser = (index) => {
    const res = form.purchasers;
    res.splice(index, 1);
    setForm({ ...form, purchasers: res });
  };

  const nextPage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const sendRequest = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/site`,
      options
    ).then((res) => res.json());
    props.update();
    if (res.status === 201) props.onHide();
    props.setToastMsg(res.message);
    props.setToast(true);
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        fullscreen
      >
        <Modal.Header closeButton>Add Site</Modal.Header>
        <Modal.Body>
          {currentPage === 1 && (
            <>
              <Card className="mb-3">
                <Card.Header>Site Information</Card.Header>
                <Card.Body>
                  <Form onSubmit={nextPage}>
                    <Row>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              placeholder="Enter Address"
                              value={form.address.toLowerCase()}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  address: e.target.value.toLowerCase(),
                                })
                              }
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
                            <Form.Select
                              value={form.client}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  client: e.target.value,
                                })
                              }
                              required
                            >
                              <option> Select Client...</option>
                              {props.clients.map((i, index) => (
                                <option
                                  key={`client-site-${index}`}
                                  value={i._id}
                                >
                                  {i.name}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b
                            className="text-primary"
                            onClick={props.showAddClient}
                          >
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
                                  value={form.area.toLowerCase()}
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      area: e.target.value.toLowerCase(),
                                    })
                                  }
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
                                <Form.Select
                                  value={form.area_unit}
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      area_unit: e.target.value,
                                    })
                                  }
                                  required
                                >
                                  <option defaultChecked defaultValue={""}>
                                    {" "}
                                    Select Area Unit...
                                  </option>
                                  {props.areaUnits.map((i, index) => (
                                    <option
                                      key={`area-unit-site-${index}`}
                                      value={i._id}
                                    >
                                      {i.title}
                                    </option>
                                  ))}
                                </Form.Select>
                              </Form.Group>
                            </Row>
                            <Row className="ps-1">
                              <b
                                className="text-primary"
                                onClick={props.showAddUnit}
                              >
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
                            <Form.Select
                              value={form.supervisor_sr}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  supervisor_sr: e.target.value,
                                })
                              }
                              required
                            >
                              <option> Select Senior Supervisor...</option>
                              {props.supervisors
                                .filter((i) => i.position === "sr")
                                .map((i, index) => (
                                  <option
                                    key={`supervisors-sr-site-${index}`}
                                    value={i._id}
                                  >
                                    {i.name}
                                  </option>
                                ))}
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b
                            className="text-primary"
                            onClick={props.showAddSeniorSupervisor}
                          >
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
                            <Form.Select
                              value={form.supervisor_jr}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  supervisor_jr: e.target.value,
                                })
                              }
                              required
                            >
                              <option> Select Junior Supervisor...</option>
                              {props.supervisors
                                .filter((i) => i.position === "jr")
                                .map((i, index) => (
                                  <option
                                    key={`supervisors-sr-site-${index}`}
                                    value={i._id}
                                  >
                                    {i.name}
                                  </option>
                                ))}
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b
                            className="text-primary"
                            onClick={props.showAddJuniorSupervisor}
                          >
                            <u>Add New Junior Supervisor</u>
                          </b>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="pe-3 pull-right">
                      <Button type="submit">Next</Button>
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
                  <Form onSubmit={addPurchaserToList}>
                    <Row>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Select
                              value={myPurchaser.city}
                              onChange={(e) =>
                                setMyPurchaser({
                                  ...myPurchaser,
                                  city: e.target.value,
                                })
                              }
                              required
                            >
                              <option> Select City...</option>
                              {props.cities.map((i, index) => (
                                <option
                                  key={`cities-site-${index}`}
                                  value={i._id}
                                >
                                  {i.title}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b
                            className="text-primary"
                            onClick={props.showAddCity}
                          >
                            <u>Add New City</u>
                          </b>
                        </Row>
                      </Col>
                      <Col className="mb-3" lg={6} mid={12}>
                        <Row className="mb-2">
                          <Form.Group>
                            <Form.Label>Purchaser</Form.Label>
                            <Form.Select
                              value={myPurchaser.purchaser}
                              onChange={(e) =>
                                setMyPurchaser({
                                  ...myPurchaser,
                                  purchaser: e.target.value,
                                })
                              }
                              required
                            >
                              <option> Select Purchaser...</option>
                              {props.purchasers.map((i, index) => (
                                <option
                                  key={`purchasers-site-${index}`}
                                  value={i._id}
                                >
                                  {i.name}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b
                            className="text-primary"
                            onClick={props.showAddPurchaser}
                          >
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
                            <Form.Select
                              value={myPurchaser.material}
                              onChange={(e) =>
                                setMyPurchaser({
                                  ...myPurchaser,
                                  material: e.target.value,
                                })
                              }
                              required
                            >
                              <option> Select Raw Material...</option>
                              {props.rawMaterials.map((i, index) => (
                                <option
                                  key={`rawMaterials-site-${index}`}
                                  value={i._id}
                                >
                                  {i.title}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Row className="ps-1">
                          <b
                            className="text-primary"
                            onClick={props.showAddRawMaterial}
                          >
                            <u>Add New Raw Material</u>
                          </b>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="pe-3 pull-right">
                      <Button type="submit">Add Purchaser</Button>
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
                      {form.purchasers.map((i, index) => (
                        <tr key={`site-table-purchaser-${index}`}>
                          <td>{index + 1}</td>
                          <td>{props.getPurchaserName(i.purchaser)}</td>
                          <td>{props.getCityName(i.city)}</td>
                          <td>{props.getMaterialName(i.material)}</td>
                          <td>
                            <Button
                              onClick={() => deletePurchaser(index)}
                              variant="danger"
                            >
                              <i className="fa fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
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
                      <b>Address: </b> {form.address}
                    </Col>
                    <Col sm={12} lg={6}>
                      <b>Client: </b> {props.getClientName(form.client)}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={12} lg={6}>
                      <b>Area: </b> {`${form.area} ${props.getAreaUnitName(form.area_unit)}`}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={12} lg={6}>
                      <b>Senior Supervisor: </b> {props.getSupervisorName(form.supervisor_sr)}
                    </Col>
                    <Col sm={12} lg={6}>
                      <b>Junior Supervisor: </b> {props.getSupervisorName(form.supervisor_jr)}
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
                      {form.purchasers.map((i, index) => (
                        <tr key={`review-site-index-${index}`}>
                          <td>{index + 1}</td>
                          <td>{props.getPurchaserName(i.purchaser)}</td>
                          <td>{props.getCityName(i.city)}</td>
                          <td>{props.getMaterialName(i.material)}</td>
                        </tr>
                      ))}
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
              <Form onSubmit={sendRequest}>
                <Button type="submit" className="me-3 mb-3" variant="success">
                  Send Request
                </Button>
              </Form>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
