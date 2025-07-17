import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

const Header = () => {
  const [loginButton, setloginButton] = useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginButton == "Login"
                ? setloginButton("Logout")
                : setloginButton("Login")
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
