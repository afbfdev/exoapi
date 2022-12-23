import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
        <nav className = "navbar navbar-expand-lg bg-light">
            <Link to = '/' activeclassname ="is-disabled" className="btn btn-success">Acceuil</Link>
        </nav>
    </div>
  )
}
export default Navbar ;