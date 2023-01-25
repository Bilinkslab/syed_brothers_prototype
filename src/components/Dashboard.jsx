import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteCard from "./SiteCard";
import AddSite from "./AddSite";

export default function Dashboard() {
  return (
    <>
    <Card className="mb-3">
        <Card.Header>Admin Panel</Card.Header>
        <Card.Body>
            <Row>
                <Col className="mb-3" lg={3} md={6}><SiteCard /></Col>
                <Col className="mb-3" lg={3} md={6}><SiteCard /></Col>
                <Col className="mb-3" lg={3} md={6}><SiteCard /></Col>
                <Col className="mb-3" lg={3} md={6}><SiteCard /></Col>
            </Row>
        </Card.Body>
    </Card>
      <Card>
        <Card.Body>
          <Card.Title>Basic Actions</Card.Title>
          <Button className="me-3">Add Site</Button>
        </Card.Body>
      </Card>
      <AddSite />
    </>
  );
}
