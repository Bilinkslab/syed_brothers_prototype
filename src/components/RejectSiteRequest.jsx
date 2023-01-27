import { Button, Form, Modal } from "react-bootstrap";

export default function RejectSiteRequest(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>Reject Request</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                    <Button variant="success">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}