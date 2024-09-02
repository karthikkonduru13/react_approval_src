import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ApproveUser from "./ApproveUser"

function DisplayUsers() {
  const navigate = useNavigate()
  const [theUsers, setTheUsers] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3011/display_users_for_approval")
      .then(response => {
        setTheUsers(response.data)
      })
      .catch(error => {
        console.error("Error fetching users:", error)
      })
  }, [])

  function FunUserReject(params) {
    params.preventDefault()
    alert("FunUserReject")
  }

  function FunUserApprove(params) {
    params.preventDefault()
    //navigate("/ApproveUser/omsairam", { state: { userId: "user.id" } }) // Pass an empty object as state

    //    alert("FunUserApprove")
  }

  return (
    <>
      <div className="MenuRight">
        <div className="container background-color-body margin_10px input_text_body input_text_body_submit">
          <div className="row13 padding_row">
            {theUsers.map(user => (
              <div key={user.id} onClick={() => navigate(`/ApproveUser/${user.id}`)}>
                <p>{user.FirstName + " first_field " + user.LastName + " second_field " + user.UserName}</p>
              </div>
            ))}
            <input onClick={FunUserReject} type="submit" value="Reject" />
            <input onClick={FunUserApprove} type="submit" value="Approve" />
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayUsers
