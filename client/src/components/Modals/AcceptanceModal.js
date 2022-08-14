import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AcceptanceModal({show, onHide, onConfirm, eventInstrumentId, attendee}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Response to The Request</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p><a href="/applicant">@{attendee?.user.handle}</a> is sending a request to attend.</p>
        <p>How would you like to response?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => onConfirm(eventInstrumentId)} >Accept</Button>
        <Button variant="secondary" onClick={onHide}>Decline</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AcceptanceModal;