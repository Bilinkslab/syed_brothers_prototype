import { Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function UpdateSiteSupervisorJR(props) {
  const supervisors = props.supervisors.filter((i) => i.position !== "sr");
  const [form, setForm] = useState(props.site);
  useEffect(() => {
    setForm(props.site);
  }, [props.site]);
  const handleSubmit = async () => {
    console.log(form)
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
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
        <Modal.Header closeButton>Update Supervisor</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Select
                value={form.supervisor_jr}
                onChange={(e) =>
                  setForm({ ...form, supervisor_jr: e.target.value })
                }
                required
              >
                <option>Select supervisor...</option>
                {supervisors.map((i, index) => (
                  <option key={`UpdateSS-${index}`} value={i._id}>
                    {i.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
