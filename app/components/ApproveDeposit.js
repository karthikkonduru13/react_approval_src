import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"
import { Link } from "react-router-dom"

function ApproveDeposit() {
  function FunDepositApprove(params) {
    params.preventDefault()
    alert("FunDepositApprove")
  }

  function FunDepositReject(params) {
    params.preventDefault()
    alert("FunDepositReject")
  }
  return (
    <>
      <div className="MenuRight">
        <div className="container background-color-body margin_10px input_text_body input_text_body_submit">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name - Deposit</label>
            </div>
            <div className="col-75">
              <input readOnly type="text" id="fname" name="firstname" placeholder="Your name.." value="" />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="Loan">Loan Amount</label>
            </div>
            <div className="col-75">
              <input type="text" id="Loanid" name="Loan" placeholder="Loan Amount.." />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="address">Address Proof</label>
            </div>
            <div className="col-75">
              <input type="text" id="Loanid" name="Loan" placeholder="Address Proof.." />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="tenor">Tenor</label>
            </div>
            <div className="col-75">
              <select id="tenorid" name="tenor">
                <option value="" disabled hidden>
                  Select the Tenor
                </option>
                <option value="2-years">2-Years</option>
                <option value="3-years">3-Years</option>
                <option value="4-years">4-Years</option>
              </select>
            </div>
          </div>

          <div className="row13 padding_row">
            <input onClick={FunDepositReject} type="submit" value="Reject" />
            <input onClick={FunDepositApprove} type="submit" value="Approve" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ApproveDeposit
