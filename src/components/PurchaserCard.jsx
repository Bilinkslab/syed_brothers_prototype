import { Card, Col, Row, Table } from "react-bootstrap";

export default function PurchaserCard(props) {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col xs={6}>Purchaser(s)</Col>
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
              <th>Total Purchaser(s)</th>
              <th>Active Purchaser(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>5</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
