import { Button, Form, Modal } from "react-bootstrap";

export default function AddClient(props) {
    return (
        <>
            <Modal backdrop="static" show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>Add Client</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control placeholder="Enter Fullname" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>CNIC</Form.Label>
                            <Form.Control placeholder="Enter CNIC" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control placeholder="Enter Mobile Number" />
                        </Form.Group>
                        <Button>Add Client</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}