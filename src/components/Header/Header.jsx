import { Link } from "react-router-dom"
import { Nav } from "../Nav/Nav"
import './Header.css';

export const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <img className="logo" src="/images/talento.png" alt="logo" />
      </Link>
      <Nav/>
    </header>
  )
}
