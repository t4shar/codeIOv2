import Links from "./Links"
import './Navbar.css'
function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              Logo
            </div>
          </div>
          <div className="col-6">
            <div className="navLinks">
            <Links/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar