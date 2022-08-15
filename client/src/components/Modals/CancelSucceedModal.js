import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CancelSuceedModal(props) {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Canceld!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Your spot is available now! </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CancelSuceedModal;