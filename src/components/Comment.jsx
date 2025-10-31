import { useContext } from "react"
import UserInfoContext from "../context/UserInfoContext"

export default function Comment() {

  const { username, isAdmin } = useContext(UserInfoContext);

  return (
    <div>
      <p>Logged in as: {username}</p>
      {isAdmin && (<><span>This button is adding by isAdmin boolean value 👉</span> <button>Edit Button</button></>)}
    </div>
  )
}
