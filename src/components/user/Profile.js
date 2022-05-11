import React from "react"
import { useGlobalState } from "../../context/GlobalState";
import { Modal } from '../Modal';
const Profile = () => {
  const [ state, dispatch] = useGlobalState();

  return (
    <Modal>
    <div>
      <h1>{state.currentUser.user_id}</h1>
    </div>
    </Modal>
  )
}

export default Profile