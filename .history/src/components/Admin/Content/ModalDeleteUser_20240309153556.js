import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiServices";
import { toast } from "react-toastify";

const ModalDelete = (props) => {
  const handleClose = () => props.setShow(false);
  const { dataDelete, fecthListUser } = props;
  const handleSubmitDeleteUser = async () => {
    let data = await deleteUser(dataDelete.id);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // await fecthListUser();
      await props.fecthListUserWithPaginate(1);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <Modal show={props.show} backdrop="static" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure Delete this user. email ={" "}
          <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={handleSubmitDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
