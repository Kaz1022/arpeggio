import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AcceptedModal(props) {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Your Spot Got Filled!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p> Yay! You found a buddy!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AcceptedModal;