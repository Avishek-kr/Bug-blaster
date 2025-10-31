import { useContext } from "react";
import Post from "./Post";
import UserInfoContext from "../context/UserInfoContext";
import ThemeContext from "../context/ThemeContext";

export default function BlogPage() {
  const { username, isAdmin } = useContext(UserInfoContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    isAdmin && (
      <div className="text-center border-b-2" style={theme === 'dark' ? { color: '#ffffff', backgroundColor: 'rgb(17 24 39 / var(--tw-bg-opacity, 1))' } : {}}>
      <h1 className="font-bold">This is an example of Context API Blog, You can hide it by setting <code><span class="italic">{"{isAdmin: false}"}</span></code> in App.js 😄</h1>
      <Post />
      <div>Current theme: {theme} (Combining state and context)</div>
      <button className="mt-3 mb-3 m-auto block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={toggleTheme}>Toggle Theme</button>
      </div>
    )
  )
}