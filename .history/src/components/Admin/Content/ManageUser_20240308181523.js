import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fecthListUser();
  }, []);
  const fecthListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };
  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };
  const handleClickBtnView = (user) => {
    console.log("view");
    // setShowModalUpdateUser(true);
    // setDataUpdate(user);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus />
            Add new user
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShowUser={setShowModalCreateUser}
          fecthListUser={fecthListUser}
        />
        <ModalUpdateUser
          dataUpdate={dataUpdate}
          show={showModalUpdateUser}
          setShowUser={setShowModalUpdateUser}
          fecthListUser={fecthListUser}
          resetUpdateData={resetUpdateData}
        />
        <ModalViewUser />
      </div>
    </div>
  );
};

export default ManageUser;
