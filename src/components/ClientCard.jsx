import { Card, Col, Row, Table } from "react-bootstrap";

export default function ClientCard(props) {
  return (
    <Card className="text-white bg-danger">
      <Card.Header>
        <Row>
          <Col xs={6}><b>Client(s)</b></Col>
          <Col xs={6} style={{ textAlign: "right" }}>
            <i onClick={props.onClick} className="ms-4 fa fa-eye"></i>
            <i onClick={props.onClick} className="ms-4 fa fa-plus"></i>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Table className="text-white">
          <thead>
            <tr>
              <th>Total Client(s)</th>
              <th>Active Client(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>142</td>
              <td>4</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
