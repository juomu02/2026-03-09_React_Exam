import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-2">
      <NavLink to="/" className="btn btn-ghost text-xl">
        Pagrindinis
      </NavLink>
      <NavLink to="/registration" className="btn btn-ghost text-xl">
        Registracija
      </NavLink>
      <NavLink to="/memberinfo" className="btn btn-ghost text-xl">
        Narių infrmacija
      </NavLink>
      <NavLink to="/memberslist" className="btn btn-ghost text-xl">
        Narių sąrašas
      </NavLink>
    </div>
  );
}
