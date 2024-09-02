import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"
import { Link } from "react-router-dom"
import ApproveAccount from "./ApproveAccount"
import DisplayAccount from "./DisplayAccount"
import DisplayUsers from "./DisplayUsers"
import { useNavigate } from 'react-router-dom';

const useState = React.useState

function HeaderMenu(props) {
  const [showUnAuthorize, setShowUnAuthorize] = useState(false)
  const navigate = useNavigate(); // Initialize navigate

  function FunAccAuthorize(event) {
    event.preventDefault()
    //    document.body.classList.add("blur") // Apply blur effect to the body
    setShowUnAuthorize(true)
  }

  function FunLoanAuthorize(event) {
    event.preventDefault()
    alert("FunLoanAuthorize")
  }

  function FunDepositAuthorize(event) {
    event.preventDefault()
    alert("FunDepositAuthorize")
  }

  function FunUserAuthorize(event) {
    event.preventDefault()
    alert("FunUserAuthorize")
  }

  function FunLogOut(event) {
    event.preventDefault()
    props.setLoggedIn(false)
    localStorage.removeItem("localAuthrizerLoggedIn")
    navigate("/")

  }

  return (
    <>
      <div className="MenuLeft">
        <h1>Authorizer Menu</h1>
        <p>
          <Link to="/">Home</Link>
        </p>

        <p>
          <Link to="">Authorize Account</Link>
        </p>
        <p>
          <Link to="">Authorize Loan</Link>
        </p>
        <p>
          <Link to="">Authorize Deposit</Link>
        </p>
        <p>
          <Link to="/DisplayUsers">Authorize User</Link>
        </p>
      </div>

      {showUnAuthorize && <DisplayAccount />}

      <div className="row padding_row input_text_body_submit">
        <input onClick={FunLogOut} className="input_logout" type="submit" value="Log Out" />
      </div>
    </>
  )
}

export default HeaderMenu
