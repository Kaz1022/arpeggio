import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AcceptanceModal(props) {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Response to The Request</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>$ApplicantName is sending a request to attend.</p>
        <p>How would you like to response?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={props.onConfirm} >Accept</Button>
        <Button variant="secondary" onClick={props.onHide}>Decline</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AcceptanceModal;