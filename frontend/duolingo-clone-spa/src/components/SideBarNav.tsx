
import "../styles/sidebarnav.css";
import { NavLink } from "react-router-dom";

const SideBarNav = () => {
  return (
    <div id="sidebar">
      <h1>Netlingo</h1>
      <nav>      <ul>
        <li> <NavLink to="/">Learn</NavLink> </li>
        <li> <NavLink to="profile">Profile</NavLink> </li>
        <li> <NavLink to="settings">Settings</NavLink> </li>
      </ul></nav>
    </div>
  )
}

export default SideBarNav;