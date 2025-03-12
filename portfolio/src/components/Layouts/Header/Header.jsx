import { NavLink } from "react-router-dom";
import "/src/index.css"; 


export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Inicio</NavLink></li>
          <li><NavLink to="/Skills" className={({ isActive }) => (isActive ? "active" : "")}>Habilidades</NavLink></li>
          <li><NavLink to="/SocialSkills" className={({ isActive }) => (isActive ? "active" : "")}>Habilidades Sociales</NavLink></li>
          <li><NavLink to="/Studies" className={({ isActive }) => (isActive ? "active" : "")}>Estudios</NavLink></li>
          <li><NavLink to="/Experience" className={({ isActive }) => (isActive ? "active" : "")}>Experiencias</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
