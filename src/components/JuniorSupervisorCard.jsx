import { Card, Col, Row, Table } from "react-bootstrap";

export default function JuniorSupervisorCard(props) {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col xs={6}>Junior Supervisor(s)</Col>
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
              <th>Total Junior Supervisor(s)</th>
              <th>Active Junior Supervisor(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23</td>
              <td>16</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
