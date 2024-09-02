import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"
import { Link } from "react-router-dom"

const useState = React.useState

 function LoggedOutForm(props) {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState("password")

  async function TheLoginFunction(event) {
    event.preventDefault()

    if (userName == "" || password == "") return
    alert(userName + password)

    const theResponse = await Axios.post("http://localhost:3011/login_user_route", { theUserName: userName, thePassword: password })
    console.log(theResponse.data.login_pwd_matching)
    console.log(theResponse.data)
    if (theResponse.data.login_pwd_matching == "true") {
      localStorage.setItem("localAuthrizerLoggedIn", theResponse.data.login_pwd_matching)
      props.setLoggedIn(true)
    } else {
      alert("wrong login credientials")
    }

  }

  function showThePassword(event) {
    event.preventDefault()

    if (showPassword == "password") {
      setShowPassword("text")
    } else {
      setShowPassword("password")
    }
  }
  return (
    <>
      <div className="body_background_color_login">
        <div className="container_login">
          <div className="centered-div">
            <h1 className="company_header">#Your Company name!!</h1>
            <div className="input-fields">
              <label htmlFor="uname">User Name / Email Address:</label>
              <input onChange={event => setUserName(event.target.value)} type="text" id="uname" name="uname" />
              <label htmlFor="yourpassword">Your Password:</label>
              <input onChange={event => setPassword(event.target.value)} type={showPassword} id="yourpassword" name="yourpassword" />
            </div>
            Show Password: <input onClick={showThePassword} type="checkbox" />
            <input onClick={TheLoginFunction} className="button_color" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoggedOutForm
