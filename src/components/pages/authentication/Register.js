import React from 'react'
import RegisterHeader from "../../header_footer/GeneralHeader";
import Footer from "../../header_footer/Footer";
import Content from './ContentRegister';

function Register() {
    return (
        <div>
            <RegisterHeader />
            <Content/>
            <Footer />
        </div>
    )
}

export default Register
