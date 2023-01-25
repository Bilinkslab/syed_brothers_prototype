import { Modal, Card, Table } from "react-bootstrap";

export default function ModalTable(props) {
    return (
        <>
            <Modal>
                <Modal.Header>{props.header}</Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        {props.headings.map(i => (
                                            <th key={i}>{i}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.data.map(i => (
                                        <tr key={i}>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    );
}