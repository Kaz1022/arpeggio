import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CancelAttdModal({show, onHide, onConfirm, eventInstrumentId, attendee}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>ATTENTION!!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>This will remove the attendee.<br/>Are you sure you want to empty the spot?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => onConfirm(eventInstrumentId, attendee.id)} >Yes, cancel the spot!</Button>
        <Button variant="secondary" onClick={onHide}>No, keep it filled.</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CancelAttdModal;