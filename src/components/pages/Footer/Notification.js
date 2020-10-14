import React from 'react'
import Header from '../../header_footer/GeneralHeader';
import Footer from '../../header_footer/Footer';
import '../../../App.css'

function Notification() {
    return (
        <div>
            <Header />
            <div className="notification_wrapper">
                <div className="notification_header">
                    Notifications
                </div>
                <div className="notification_content">
                    <ul>
                        <li>
                            Notification 1
                        </li>
                        <li>
                            Notification 2
                        </li>
                        <li>
                            Notification 3
                        </li>
                        <li>
                            Notification 4
                        </li>
                        <li>
                            Notification 5
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Notification
