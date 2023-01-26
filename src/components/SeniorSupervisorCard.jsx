import { Card, Col, Row, Table } from "react-bootstrap";

export default function SeniorSupervisorCard(props) {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col xs={6}><b>Senior Supervisor(s)</b></Col>
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
              <th>Total Senior Supervisor(s)</th>
              <th>Active Senior Supervisor(s)</th>
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
