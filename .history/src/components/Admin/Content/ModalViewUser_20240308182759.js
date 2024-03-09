import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiServices";
import _ from "lodash";
// import "./ManageUser.scss";
const ModalViewUser = (props) => {
  // const [show, setShow] = useState(false);
  const { show, setShowModalView, dataView } = props;
  const handleClose = () => {
    setShowModalView(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPrevierImage("");
    props.resetViewData();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previerImage, setPrevierImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataView)) {
      setEmail(dataView.email);
      setUsername(dataView.username);
      setRole(dataView.role);
      setImage("");
      if (dataView.image) {
        setPrevierImage(`data:image/jpeg;base64,${dataView.image}`);
      }
    }
  }, [dataView]);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        backdrop="static"
        show={show}
        onHide={handleClose}
        size="xl"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                disabled
                className="form-control"
                value={email}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                disabled
                type="password"
                className="form-control"
                value={password}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">User Name</label>
              <input
                disabled
                type="text"
                className="form-control"
                value={username}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select disabled className="form-select" value={role}>
                <option value={"USER"}>User</option>
                <option value={"ADMIN"}>ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              {/* <label htmlFor="labelUpload" className="form-label label-upload">
                <FcPlus /> Upload file Image
              </label> */}
              <span>Preview Image</span>
            </div>
            <div className="col-md-12 img-preview">
              {previerImage ? (
                <img src={previerImage} alt="" />
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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewUser;
