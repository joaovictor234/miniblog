import { useEffect } from "react";
import { useAuthValue } from "../../context/AuthContext";
import './account.css';

const Account = () => {
  const { user } = useAuthValue();

  useEffect(() => {
    console.log(user)
  }, [])

  return <div className='account'>
    <h2>Account information</h2>
    <p>Name: <span>{user.displayName}</span></p>
    <p>Email: <span>{user.email}</span></p>
    <p>Uid: <span>{user.uid}</span></p>
  </div>
}

export default Account;