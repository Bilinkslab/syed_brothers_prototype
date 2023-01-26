import { Card, Col, Row, Table } from "react-bootstrap";

export default function SiteCard(props) {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col xs={6}><b>Site(s)</b></Col>
          <Col xs={6} style={{ textAlign: "right" }}>
            <i onClick={props.onClick} className="ms-4 fa fa-eye"></i>
            <i onClick={props.onClick} className="ms-4 fa fa-plus"></i>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Table>
          <thead>
            <tr>
              <th>Total Site(s)</th>
              <th>Active Site(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>158</td>
              <td>4</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
