import { useEffect, useState } from "react";
import Api from './Api'
import ListUsers from "./ListUsers";

function Users() {
  const [usersList, setUsersList] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    Api
      .getList('users')
      .then(list => {
        setUsersList(list)
        setError('')
      })
      .catch(err => setError(err))
  }, [])

  return (
    <>
      {error ? <span>{error}</span> : ''}
      {usersList.length > 0 && (<ListUsers usersList={usersList} />)}
    </>
  );
}

export default Users;