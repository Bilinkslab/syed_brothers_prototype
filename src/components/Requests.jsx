import { useEffect, useState } from "react";
import { Col, Container, Form, Modal, Row, Table, Card } from "react-bootstrap";
import ViewAccountRequest from "./ViewAccountRequest";

export default function Requests(props) {
  const searchRequests = (input) => {
    console.log(input);
  };
  const [sites, setSites] = useState([]);
  const [site, setSite] = useState({
    _id: 0,
    address: "",
    client: "",
    area: "",
    area_unit: "",
    supervisor_sr: "",
    supervisor_jr: "",
    purchasers: [],
    approved: 0,
  });
  const [show, setShow] = useState(false);
  const [showRequests, setShowRequests] = useState(false);
  useEffect(() => {
    setSites(props.sites);
  }, [props.sites]);
  const viewRequest = (i) => {
    setSite(sites[i]);
    setShow(true);
  };
  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col xs={6}>
              <b>Request(s)</b>
            </Col>
            <Col xs={6} style={{ textAlign: "right" }}>
              <i
                onClick={() => setShowRequests(true)}
                className="ms-4 fa fa-eye"
              ></i>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table>
            <tbody>
              <tr>
                <th>Pending Requests</th>
                <td>4</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Modal
        show={showRequests}
        onHide={() => setShowRequests(false)}
        fullscreen
      >
        <Modal.Header closeButton>Requests</Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="mb-3">
              <Col>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  onChange={(e) => searchRequests(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Row>
                  <Col xs={3}>
                    <Form.Check
                      type="radio"
                      label="All"
                      name="status"
                      value="all"
                      onChange={(e) => console.log(e.target.value)}
                      defaultChecked
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      type="radio"
                      label="Pending"
                      name="status"
                      value="pending"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      type="radio"
                      label="Accepted"
                      name="status"
                      value="accepted"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      type="radio"
                      id=""
                      label="Rejected"
                      name="status"
                      value="rejected"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Table responsive hover striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Address</th>
                <th>Client</th>
                <th>Area</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {sites.map((i, index) => (
                <tr key={`sites-all-${index}`}>
                  <td>{index + 1}</td>
                  <td>{i.address}</td>
                  <td>{props.getClientName(i.client)}</td>
                  <td>
                    {i.area} {props.getAreaUnitName(i.area_unit)}
                  </td>
                  <td>
                    <i
                      onClick={() => viewRequest(index)}
                      className="fa fa-eye"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
      <ViewAccountRequest
        site={site}
        show={show}
        onHide={() => setShow(false)}
        getAreaUnitName={props.getAreaUnitName}
        getClientName={props.getClientName}
        getSupervisorName={props.getSupervisorName}
        getCityName={props.getCityName}
        getPurchaserName={props.getPurchaserName}
        getMaterialName={props.getMaterialName}
        supervisors={props.supervisors}
        purchasers={props.purchasers}
        cities={props.cities}
        rawMaterials={props.rawMaterials}
      />
    </>
  );
}
