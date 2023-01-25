import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteCard from "./SiteCard";
import AddSite from "./AddSite";

export default function Dashboard(props) {
  return (
    <>
      <Card className="mb-3">
        <Card.Header>Admin Panel</Card.Header>
        <Card.Body>
          <Row>
            <Col className="mb-3" lg={3} md={6}>
              <SiteCard />
            </Col>
            <Col className="mb-3" lg={3} md={6}>
              <SiteCard />
            </Col>
            <Col className="mb-3" lg={3} md={6}>
              <SiteCard />
            </Col>
            <Col className="mb-3" lg={3} md={6}>
              <SiteCard />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Basic Actions</Card.Title>
          <Button className="me-3" onClick={props.showAddSite}>
            Add Site
          </Button>
          <Button className="me-3" onClick={props.showAddClient}>
            Add Client
          </Button>
          <Button className="me-3" onClick={props.showAddUnit}>
            Add Unit
          </Button>
          <Button className="me-3" onClick={props.showAddSeniorSupervisor}>
            Add Senior Supervisor
          </Button>
          <Button className="me-3" onClick={props.showAddJuniorSupervisor}>
            Add Junior Supervisor
          </Button>
          <Button className="me-3" onClick={props.showAddCity}>
            Add City
          </Button>
          <Button className="me-3" onClick={props.showAddPurchaser}>
            Add Purchaser
          </Button>
          <Button className="me-3" onClick={props.showAddRawMaterial}>
            Add Raw Material
          </Button>
        </Card.Body>
      </Card>
      <AddSite
        show={props.addSite}
        onShow={props.showAddSite}
        onHide={props.hideAddSite}
        showAddClient={props.showAddClient}
        showAddUnit={props.showAddUnit}
        showAddSeniorSupervisor={props.showAddSeniorSupervisor}
        showAddJuniorSupervisor={props.showAddJuniorSupervisor}
        showAddCity={props.showAddCity}
        showAddRawMaterial={props.showAddRawMaterial}
        showAddPurchaser={props.showAddPurchaser}
      />
    </>
  );
}
