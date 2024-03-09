import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
// import "./ManageUser.scss";
const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previerImage, setPrevierImage] = useState("");

  const handleUploadImage = (event) => {
    setPrevierImage(URL.createObjectURL(event.target.files[0]));
    console.log("Upload");
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        backdrop="static"
        show={show}
        onHide={handleClose}
        size="xl"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                onChange={(event) => setRole(event.target.value)}
                className="form-select"
              >
                <option value={"USER"}>User</option>
                <option value={"ADMIN"}>ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="labelUpload" className="form-label label-upload">
                <FcPlus /> Upload file Image
              </label>
              <input
                id="labelUpload"
                type="file"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previerImage ? (
                <img
                  src="https://media.istockphoto.com/id/1502317574/vi/anh/m%E1%BB%9F-r%E1%BB%99ng-v%C3%B2ng-tay-l%E1%BB%85-k%E1%BB%B7-ni%E1%BB%87m-v%C3%A0-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-kinh-doanh-trong-m%E1%BB%99t-th%C3%A0nh-ph%E1%BB%91-h%E1%BA%A1nh-ph%C3%BAc-ph%E1%BA%A5n.jpg?s=2048x2048&w=is&k=20&c=UOofaBp5lR-r2fw4K0q8NbYT49f6XtAFrv3Jt7opxJY="
                  alt=""
                />
              ) : (
                <span>PreView Image</span>
              )}
              {/* <label className="form-image">Image</label> */}
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
};

export default ModalCreateUser;
