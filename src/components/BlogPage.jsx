import { useContext } from "react";
import Post from "./Post";
import UserInfoContext from "../context/UserInfoContext";

export default function BlogPage() {
  const { username, isAdmin } = useContext(UserInfoContext);
  return (
    isAdmin && (
      <div className="text-center">
      <h1 className="font-bold">This is an example of Context API Blog, You can hide it by setting <code><span class="italic">{"{isAdmin: false}"}</span></code> in App.js 😄</h1>
      <Post />
      </div>
    )
  )
}