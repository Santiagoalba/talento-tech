import { Link } from "react-router-dom"
import { Nav } from "../Nav/Nav"

export const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <img src="/images/talento.png" alt="logo" />
      </Link>
      <Nav/>
    </header>
  )
}
