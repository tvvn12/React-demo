import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import React, { useEffect, useState } from "react";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDelete from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = () => {
  const LIMIT_USER = 6;
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [listUser, setListUser] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  useEffect(() => {
    // fecthListUser();
    fecthListUserWithPaginate(1);
  }, []);
  const fecthListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUser(res.DT.users);
    }
  };

  const fecthListUserWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      console.log(res.DT);
      setListUser(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };
  const handleClickBtnView = (user) => {
    setShowModalView(true);
    setDataView(user);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };
  const resetViewData = () => {
    setDataView({});
  };
  const handleClickBtnDelete = (user) => {
    setShowModalDelete(true);
    setDataDelete(user);
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
          {/* <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
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
        <ModalViewUser
          dataView={dataView}
          show={showModalView}
          setShowModalView={setShowModalView}
          resetViewData={resetViewData}
        />
        <ModalDelete
          dataDelete={dataDelete}
          show={showModalDelete}
          setShow={setShowModalDelete}
          fecthListUser={fecthListUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
