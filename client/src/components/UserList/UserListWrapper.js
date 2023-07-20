import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/appContext";
import UserList from "./UserList";
import { getRequest } from "../../services/requests";

const UserListWrapper = () => {
  const { loginDetails, users, setUsers } = useContext(AppContext);

  useEffect(() => {
    if (users.length === 0) {
      const getUsers = async () => {
        const response = await getRequest();
        setUsers(response.data);
      };
      getUsers();
    }
  }, []);

  return (
    <UserList
      title="User List"
      imageUrl="https://static.prod01.ue1.p.pcomm.net/blackbaud/user_content/photos/000/006/6783/a6132a5cd55abcae190bc82567ca8a47-original-users.png"
      users={users}
    />
  );
};

export default UserListWrapper;
