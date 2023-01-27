import { Button, Form, Modal } from "react-bootstrap";

export default function AddSitePurchaser(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>Add Purchaser</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Purchaser</Form.Label>
              <Form.Select required>
                <option>Select purchaser...</option>
                {props.purchasers.map((i, index) => (
                  <option key={`UpdateSS-${index}`} value={i._id}>
                    {i.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Raw Material</Form.Label>
              <Form.Select required>
                <option>Select raw material...</option>
                {props.rawMaterials.map((i, index) => (
                  <option key={`UpdateSS-${index}`} value={i._id}>
                    {i.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Select required>
                <option>Select city...</option>
                {props.cities.map((i, index) => (
                  <option key={`UpdateSS-${index}`} value={i._id}>
                    {i.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
          <Button>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
