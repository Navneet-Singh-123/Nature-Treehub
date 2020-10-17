import React from 'react'
import Header from '../../header_footer/GeneralHeader'
import Footer from '../../header_footer/Footer'

function Terms() {
    return (
        <div>
            <Header />
            <div className="terms_wrapper">
                <div className="terms_heading">
                    Terms and Conditions
                </div>
                <div className="terms_content">
                    <ul>
                        <li>Condition  1</li>
                        <li>Condition  2</li>
                        <li>Condition  3</li>
                        <li>Condition  4</li>
                        <li>Condition  5</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Terms
