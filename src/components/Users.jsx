import { useState, useEffect } from "react";
const BASE_URL = 'http://localhost:3001'
export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch(BASE_URL + "/api/users")
      .then((response) => response.json())
      .then((data) => {setUsers(data.data)});
  };
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
                return <div key={user.id}>
                <img src={`${BASE_URL}/images/users/${user.image}`} alt={user.name} width={150}/>
                <p>{user.first_name}</p>
                <p >{user.last_name}</p>
                <p >{user.email}</p>
                </div>
            })
            }</div>
      </div>
    </div>
  );
};

