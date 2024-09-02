import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import DisplayUsers from "./DisplayUsers"
import { useNavigate } from 'react-router-dom';

function ApproveUser(props) {
  let { id } = useParams()
  const [varLastName, setVarLastName] = useState()
  const [varFirstName, setVarFirstName] = useState()
  const [varUserName, setVarUserName] = useState()
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    Axios.get(`http://localhost:3011/display_single_user_route?id=${id}`)
      .then(response => {

        setVarLastName(response.data.LastName)
        setVarFirstName(response.data.FirstName)
        setVarUserName(response.data.UserName)
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

    Axios.post(`http://localhost:3011/update_approval_user_route?id=${id}`)
      .then(response => {
        alert("The user is successfully approved")
        console.log("Om Sai Ram - updated !!")
//        window.location.href = "http://localhost:3001/DisplayUsers"; // Navigate to the desired URL
          navigate("/DisplayUsers")
      })
      .catch(error => {
        console.error("Error fetching users:", error)
      })
  }

  return (
    <>
      <div className="MenuRight">
        <div className="container background-color-body margin_10px input_text_body input_text_body_submit">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Approve - User</label>
            </div>
            <div className="col-75">
              <input readOnly type="text" id="fname" name="firstname" placeholder="Your name.." value={varFirstName} />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={varLastName} />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="address">User Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="username" name="username" placeholder="Address Proof.." value={varUserName} />
            </div>
          </div>

          <div className="row13 padding_row">
            <input onClick={FunUserReject} type="submit" value="Reject" />
            <input onClick={FunUserApprove} type="submit" value="Approve" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ApproveUser
