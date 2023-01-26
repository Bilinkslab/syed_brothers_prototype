import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export default function AddRawMaterial(props) {
  const [form, setForm] = useState({
    title: "",
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
      `http://localhost:${process.env.REACT_APP_API}/raw_material`,
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
        <Modal.Header closeButton>Add Raw Material</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Raw Material Title</Form.Label>
              <Form.Control
                value={form.title.toLowerCase()}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value.toLowerCase() })
                }
                placeholder="Enter Raw Material Title"
              />
            </Form.Group>
            <Button type="submit">Add Raw Material</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
