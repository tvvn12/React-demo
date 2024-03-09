import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <button>Add new user</button>
      </div>
      <div className="">Table User</div>
    </div>
  );
};

export default ManageUser;
