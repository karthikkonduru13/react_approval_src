import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoggedOutForm from "./components/LoggedOutForm"
import ApproveAccount from "./components/ApproveAccount"
import ApproveDeposit from "./components/ApproveDeposit"
import ApproveLoan from "./components/ApproveLoan"
import ApproveUser from "./components/ApproveUser"
import HeaderMenu from "./components/HeaderMenu"
import DisplayUsers from "./components/DisplayUsers"

const useState = React.useState
const useEffect = React.useEffect

function Application() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("localAuthrizerLoggedIn"))

  return (
    <BrowserRouter>
      {loggedIn ? <HeaderMenu setLoggedIn={setLoggedIn} /> : <LoggedOutForm setLoggedIn={setLoggedIn} />}
      <Routes>
        <Route path="/" element={loggedIn ? "" : ""} />
        <Route path="/ApproveAc" element={loggedIn ? <ApproveAccount /> : ""} />
        <Route path="/ApproveLn" element={loggedIn ? <ApproveLoan /> : ""} />
        <Route path="/ApproveDp" element={loggedIn ? <ApproveDeposit /> : ""} />
        <Route path="/ApproveUser/:id" element={loggedIn ? <ApproveUser /> : ""} />
        <Route path="/DisplayUsers" element={loggedIn ? <DisplayUsers /> : ""} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Application />)
