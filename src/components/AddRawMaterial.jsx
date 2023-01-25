import { Button, Form, Modal } from "react-bootstrap";

export default function AddRawMaterial(props) {
    return (
        <>
            <Modal backdrop="static" show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>Add Raw Material</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Raw Material Title</Form.Label>
                            <Form.Control placeholder="Enter Raw Material Title" />
                        </Form.Group>
                        <Button>Add Raw Material</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}