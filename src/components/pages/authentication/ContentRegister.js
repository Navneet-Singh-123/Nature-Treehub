import React, { Component } from 'react'
import '../../../App.css'

export default class ContentRegister extends Component {
    render() {
        return (
            <div className="register_wrapper">
                <div className="register_header">Sign Up</div>
                <div className="register_content">
                    <form action="" className="register_container">
                        <label htmlfor="uname" className="register_input">
                            Username
                        </label>
                        <input
                            type="text"
                            name="uname"
                            required
                            placeholder="Enter Name  "
                        />
                        <label htmlfor="umail" className="register_input">
                            Email Id
                        </label>
                        <input
                            type="email"
                            name="umail"
                            placeholder="Enter Email"
                            required
                        />
                        <label htmlfor="phone" className="register_input">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Enter Phone Number"
                        />
                        <label htmlfor="dob" className="register_input">
                            Date of Birth
                        </label>
                        <input type="text" placeholder="dd-mm-yyyy"/>
                        <label htmlFor="password" className="register_input">Password</label>
                        <input type="password" name="password" required/>
                        <label htmlFor="cpassword" className="register_input">Confirm Password</label>
                        <input type="password" name="cpassword" required/>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
