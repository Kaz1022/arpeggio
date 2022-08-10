import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MessageSentModal(props) {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Message Sent!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>The Organizer Will Reach Out to You with Further details. </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MessageSentModal;