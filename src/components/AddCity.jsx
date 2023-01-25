import { Button, Form, Modal } from "react-bootstrap";

export default function AddCity(props) {
    return (
        <>
            <Modal backdrop="static" show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>Add City</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>City Title</Form.Label>
                            <Form.Control placeholder="Enter City Title" />
                        </Form.Group>
                        <Button>Add City</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}