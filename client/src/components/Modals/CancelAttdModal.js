import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CancelAttdModal({show, onHide, onConfirm, eventInstrumentId}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>WHOOPS!!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to empty the spot?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => onConfirm(eventInstrumentId)} >Yes, cancel the spot!</Button>
        <Button variant="secondary" onClick={onHide}>No, keep it filled.</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CancelAttdModal;