import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmationModal(props) {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm your application</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>This will send a message to the Event Organizer.</p>
        <p>Are you sure you want to perform at this event?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => props.onConfirm(props.eventInstrumentId, props.eventId) } >Yes! Send Text</Button>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;