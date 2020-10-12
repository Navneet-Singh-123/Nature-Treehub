import React from 'react'
import Header from '../../header_footer/GeneralHeader';
import Footer from '../../header_footer/Footer';
import Member1 from '../../../Resources/images/Team/member.png'

function team() {
    return (
        <div>
            <Header/>
            <div className="team_wrapper">
                <div className="team_header">Our Team</div>
                <div className="team_content">
                    <div className="member">
                        <img src={Member1}/>
                        <span>Member 1</span>
                    </div>
                    <div className="member">
                        <img src={Member1}/>
                        <span>Member 1</span>
                    </div>
                    <div className="member">
                        <img src={Member1}/>
                        <span>Member 1</span>
                    </div>
                    <div className="member">
                        <img src={Member1}/>
                        <span>Member 1</span>
                    </div>
                    <div className="member">
                        <img src={Member1}/>
                        <span>Member 1</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default team
