import { useState } from "react";
import { Button, Card, Col, Modal, Row, Table } from "react-bootstrap";
import AcceptSiteRequest from "./AcceptSiteRequest";
import AddSitePurchaser from "./AddSitePurchaser";
import RejectSiteRequest from "./RejectSiteRequest";
import UpdateSiteSupervisorSR from "./UpdateSiteSupervisorSR";
import UpdateSiteSupervisorJR from "./UpdateSiteSupervisorJR";

export default function ViewAccountRequest(props) {
  const [showUpdateSupervisorSR, setShowUpdateSupervisorSR] = useState(false);
  const [showUpdateSupervisorJR, setShowUpdateSupervisorJR] = useState(false);
  const [showAddPurchaser, setShowAddPurchaser] = useState(false);
  const [showAcceptRequest, setShowAcceptRequest] = useState(false);
  const [showRejectRequest, setShowRejectRequest] = useState(false);
  return (
    <>
      <Modal fullscreen show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          Request &nbsp; <i className="fa fa-arrow-right"></i> &nbsp;{" "}
          {props.site.address}
        </Modal.Header>
        <Modal.Body>
          <Card className="mb-3">
            <Table striped hover responsive>
              <tbody>
                <tr>
                  <th>Client</th>
                  <td>{props.getClientName(props.site.client)}</td>
                </tr>
                <tr>
                  <th>Area</th>
                  <td>
                    {props.site.area}{" "}
                    {props.getAreaUnitName(props.site.area_unit)}
                  </td>
                </tr>
                <tr>
                  <th>Senior Supervisor</th>
                  <td>{props.getSupervisorName(props.site.supervisor_sr)}</td>
                </tr>
                <tr>
                  <th>Junior Supervisor</th>
                  <td>{props.getSupervisorName(props.site.supervisor_jr)}</td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Row>
            <Col className="mb-3" xs={12} md={6} lg={4}>
              <Button
                onClick={() => setShowUpdateSupervisorSR(true)}
                className="container-fluid"
              >
                Update Senior Supervisor
              </Button>
            </Col>
            <Col className="mb-3" xs={12} md={6} lg={4}>
              <Button
                onClick={() => setShowUpdateSupervisorJR(true)}
                className="container-fluid"
              >
                Update Junior Supervisor
              </Button>
            </Col>
            <Col className="mb-3" xs={12} md={6} lg={4}>
              <Button
                onClick={() => setShowAddPurchaser(true)}
                className="container-fluid"
              >
                Add Purchaser
              </Button>
            </Col>
          </Row>
          <Card className="mb-3">
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Purchaser</th>
                  <th>Material</th>
                  <th>City</th>
                  <th>Remove from list</th>
                </tr>
              </thead>
              <tbody>
                {props.site.purchasers.map((i, index) => (
                  <tr key={`req-review-${index}`}>
                    <td>{index + 1}</td>
                    <td>{props.getPurchaserName(i.purchaser)}</td>
                    <td>{props.getMaterialName(i.material)}</td>
                    <td>{props.getCityName(i.city)}</td>
                    <td>
                      <i className="fa fa-trash"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
          <Row>
            <Col className="mb-3" xs={6}>
              <Button
                onClick={() => setShowAcceptRequest(true)}
                className="container-fluid"
              >
                Accept
              </Button>
            </Col>
            <Col className="mb-3" xs={6}>
              <Button
                onClick={() => setShowRejectRequest(true)}
                className="container-fluid"
                variant="danger"
              >
                Reject
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <AcceptSiteRequest
        show={showAcceptRequest}
        onHide={() => setShowAcceptRequest(false)}
        setToast={props.setToast}
        setToastMsg={props.setToastMsg}
        update={props.update}
        site={props.site}
      />
      <RejectSiteRequest
        show={showRejectRequest}
        onHide={() => setShowRejectRequest(false)}
        setToast={props.setToast}
        setToastMsg={props.setToastMsg}
        update={props.update}
        site={props.site}
      />
      <UpdateSiteSupervisorSR
        show={showUpdateSupervisorSR}
        onHide={() => setShowUpdateSupervisorSR(false)}
        supervisors={props.supervisors}
        site={props.site}
        setToast={props.setToast}
        setToastMsg={props.setToastMsg}
        update={props.update}
      />
      <UpdateSiteSupervisorJR
        show={showUpdateSupervisorJR}
        onHide={() => setShowUpdateSupervisorJR(false)}
        supervisors={props.supervisors}
        site={props.site}
        setToast={props.setToast}
        setToastMsg={props.setToastMsg}
        update={props.update}
      />
      <AddSitePurchaser
        show={showAddPurchaser}
        onHide={() => setShowAddPurchaser(false)}
        purchasers={props.purchasers}
        cities={props.cities}
        rawMaterials={props.rawMaterials}
        setToast={props.setToast}
        setToastMsg={props.setToastMsg}
        update={props.update}
      />
    </>
  );
}
