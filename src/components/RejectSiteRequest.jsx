import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function RejectSiteRequest(props) {
  const [form, setForm] = useState(props.site);
  useEffect(() => {
    setForm(props.site);
  }, [props.site]);
  const handleSubmit = async () => {
    const newObj = { ...form };
    newObj.approved = 2;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    };
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/site/${form._id}`,
      options
    ).then((res) => res.json());
    props.update();
    if (res.status === 200) props.onHide();
    props.setToastMsg(res.message);
    props.setToast(true);
  };
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>Reject Request</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                value={form.description}
                placeholder="Enter Description"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
