import { Button, Form, Modal } from "react-bootstrap";

export default function AddUnit(props) {
    return (
        <>
            <Modal backdrop="static" show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>Add Unit</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Unit Title</Form.Label>
                            <Form.Control placeholder="Enter Unit Title" />
                        </Form.Group>
                        <Button>Add Unit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}