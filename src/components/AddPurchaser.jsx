import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export default function AddPurchaser(props) {
  const [form, setForm] = useState({
    name: "",
    cnic: "",
    mobile: "",
    city: "",
    current: "",
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
      `http://localhost:${process.env.REACT_APP_API}/purchaser`,
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
        <Modal.Header closeButton>Add Purchaser</Modal.Header>
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
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder="Enter City"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Current Residence</Form.Label>
              <Form.Control
                value={form.current}
                onChange={(e) => setForm({ ...form, current: e.target.value })}
                placeholder="Enter Current Residence"
              />
            </Form.Group>
            <Button type="submit">Add Purchaser Supervisor</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
