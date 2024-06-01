import { Link } from "react-router-dom"
import logo from "../../assets/magazin-img/logo.png"
const Header = () => {
  return (
    <div className="h-20 border border-b flex justify-between items-center p-5 md:p-10">
      <Link to="/" className="p-3">
        <img src={logo} alt="logo" className="h-16" />
      </Link>
      <div>social icon</div>
    </div>
  )
}

export default Header