import { Button, Form, Modal } from "react-bootstrap";

export default function UpdateSiteSupervisorJR(props) {
  const supervisors = props.supervisors.filter((i) => i.position !== "sr");
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>Update Supervisor</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Select required>
                <option>Select supervisor...</option>
                {supervisors.map((i, index) => (
                  <option key={`UpdateSS-${index}`} value={i._id}>
                    {i.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
