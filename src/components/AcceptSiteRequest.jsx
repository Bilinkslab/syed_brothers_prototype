import { Button, Form, Modal } from "react-bootstrap";

export default function AcceptSiteRequest(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>Accept Request</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Advance</Form.Label>
                            <Form.Control type="number" placeholder="Enter Advance" required />
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