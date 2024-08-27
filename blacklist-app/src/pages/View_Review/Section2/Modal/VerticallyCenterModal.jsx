// import React from 'react'
import "./VerticallyCenterModal.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function VerticallyCenterModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{fontFamily:"Fraunces"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <div className="modal-review-title">
                <h3>Company Name</h3>
                <h6>Company Web</h6>
            </div>
        </Modal.Title>

      </Modal.Header>

      <Modal.Body>
      <div className="modal-review-body">
        <h5>Secret Name :</h5>
        <h5>Worked As :</h5>
        <div className="modal-review-rate d-flex gap-1 mb-4">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStarHalfAlt color="orange" />
        </div>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
