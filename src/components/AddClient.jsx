import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function AddClient(props) {
  const [form, setForm] = useState({
    name: "",
    cnic: "",
    mobile: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/client`,
      options
    ).then((res) => res.json());
    props.update();
    if (res.status === 201) props.onHide();
    props.setToastMsg(res.message);
    props.setToast(true);
  };
  return (
    <>
      <Modal backdrop="static" show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>Add Client</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter Fullname"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CNIC</Form.Label>
              <Form.Control
                value={form.cnic}
                onChange={(e) => setForm({ ...form, cnic: e.target.value })}
                placeholder="Enter CNIC"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                placeholder="Enter Mobile Number"
              />
            </Form.Group>
            <Button type="submit">Add Client</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
