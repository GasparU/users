import { useState } from "react";
import axios from "axios";
// import {url_back} from "../../url"
const useUserCrud = () => {
  const [users, setUsers] = useState();
  const url = `https://users-crud.academlo.tech/users`;
  // const url = `${url_back.URL_USERS}`;

  // GET

  const getAllUsers = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  // POST
  const createNewUser = (data) => {
    axios
      .post(url, data)
      .then((res) => getAllUsers())
      .catch((err) => console.log(err));
  };

  // DELETE

  const deleteUserBiId = (id) => {
    const urlDelete = `${url}/${id}`;
    axios
      .delete(urlDelete)
      .then((res) => {
        console.log(res);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // UPDATE
  const updateUserById = (id, data) => {
    const urlUpdate = `${url}/${id}`;
    axios
      .put(urlUpdate, data)
      .then((res) => {
        console.log(res);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return { users, getAllUsers, createNewUser, deleteUserBiId, updateUserById };
};

export default useUserCrud;
