import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function AcceptanceModal({ show, onHide, onConfirm, eventInstrumentId, attendee }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Response to The Request</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p><Link to="/applicant" state={{ id: attendee?.user.id }} >@{attendee?.user.handle}</Link> is sending a request to attend.</p>
        <p>How would you like to response?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => onConfirm(eventInstrumentId, attendee.id)} >Accept</Button>
        <Button variant="secondary" onClick={onHide}>Decline</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AcceptanceModal;