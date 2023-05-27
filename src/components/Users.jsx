import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  };
  console.log(users);
  return (
    <div>
      <div>
        <p>cantidad: {users.length}</p>
      </div>
      <div>last user created</div>
      <div>
        list users:
        <div>{
            users.map(user => {
                return 
                <p key={user.id}>{user.image}</p>;
                <p key={user.id}>{user.first_name}</p>;
                <p key={user.id}>{user.last_name}</p>;
                <p key={user.id}>{user.email}</p>
            })
            }</div>
      </div>
    </div>
  );
};

