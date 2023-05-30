import { useState, useEffect } from "react";
const BASE_URL = "http://localhost:3001";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch(BASE_URL + "/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  };
  const lastUser = users[users.length - 1];
  return (
    <div>
      <div className="flex justify-center  items-center m-3 h-52">
      <div className="w-[50%] flex flex-col items-center">
          <p className="font-bold text-xl m-4">Total Users:</p>
          <div className="flex flex-col items-center shadow-xl  p-4 h-[200px] w-[80%] bg-white">
          <p className="text-[5em]">{users.length}</p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center flex-col items-center">
          <p className="font-bold text-xl m-4">Last user created:</p>
          <div className="flex flex-col items-center shadow-xl  w-[80%] p-4 h-[200px] bg-white">
          <figure className="h-[70%] flex justify-center items-center ">
            <img 
            className="object-contain h-36"
              src={`${BASE_URL}/images/users/${lastUser?.images[0].name}`}
              width={50}
            />
    
    </figure>
            <p className="font-bold">{lastUser?.first_name}</p>
            <p className="text-green-600 font-bold">${lastUser?.email}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center">
      <p className="font-bold text-[1.5em] my-9 ml-4">User list:</p>
        </div>
        <div className="flex justify-evenly items-center gap-4 flex-wrap ">
          {users.map((user) => {
            return (
              <div className="flex flex-col items-center shadow-xl w-[20%]  p-4 h-[300px] rounded-md bg-white" key={user.id} >
                <figure className="h-[70%] flex justify-center items-center ">
                <img
                className="object-contain h-36"
                  src={`${BASE_URL}/images/products/${user.images[0].name}`}
                  />
                </figure>
                <p>{user.first_name}</p>
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
