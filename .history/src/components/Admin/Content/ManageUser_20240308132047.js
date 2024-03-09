import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="">Add new user</button>
        </div>
        <div className="table-users-container">Table User</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;