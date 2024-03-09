import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form ClassName="row g-3">
            <div ClassName="col-md-6">
              <label for="inputEmail4" ClassName="form-label">
                Email
              </label>
              <input type="email" ClassName="form-control" id="inputEmail4" />
            </div>
            <div ClassName="col-md-6">
              <label for="inputPassword4" ClassName="form-label">
                Password
              </label>
              <input
                type="password"
                ClassName="form-control"
                id="inputPassword4"
              />
            </div>

            <div ClassName="col-md-6">
              <label for="inputCity" ClassName="form-label">
                User Name
              </label>
              <input type="text" ClassName="form-control" id="inputCity" />
            </div>
            <div ClassName="col-md-4">
              <label for="inputState" ClassName="form-label">
                Role
              </label>
              <select id="inputState" ClassName="form-select">
                <option selected value={"USER"}>
                  User
                </option>
                <option value={"ADMIN"}>ADMIN</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <button>Add new user</button>
      </div>
      <div className="">
        Table User
        <Example />
      </div>
    </div>
  );
};

export default ManageUser;
