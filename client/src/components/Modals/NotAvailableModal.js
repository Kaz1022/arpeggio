import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NotAvailableModal(props) {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>WHOOPS !</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>It look like this event is either Pending or Filled. </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NotAvailableModal;