import React, { Component } from 'react'
import Header from '../../header_footer/GeneralHeader';
import Footer from '../../header_footer/Footer';
import '../../../App.css'
import image1 from '../../../Resources/images/gallery/g1.jfif'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Header /> 
                    <div className="gallery_wrapper">
                        <div className="gallery_header">
                            Gallery
                        </div>
                        <div className="gallery_content">
                            <div className="gal_images">
                                <img src={image1} alt="img1"/>
                                <span>Image 1</span>
                            </div>
                            <div className="gal_images" >
                                <img src={image1} alt="img2"/>
                                <span>Image 2</span>
                            </div>
                            <div className="gal_images">
                                <img src={image1} alt="img3"/>
                                <span>Image 3</span>
                            </div>
                            <div className="gal_images">
                                <img src={image1} alt="img4"/>
                                <span>Image 4</span>
                            </div>
                            <div className="gal_images">
                                <img src={image1} alt="img5"/>
                                <span>Image 5</span>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}
