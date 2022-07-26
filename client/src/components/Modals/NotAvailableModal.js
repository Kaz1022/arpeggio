import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NotAvailableModal(props) {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>WHOOPS !</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>It looks like you have already applied for a spot at this event or this position is Unavailable. </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NotAvailableModal;