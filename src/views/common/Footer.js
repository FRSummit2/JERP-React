import React, { Component } from 'react';

// function Header() {
class Footer extends Component {
    render() {
        return (
            <div id="footer" className="footer-section bg-danger d-flex align-items-center">
                <div className="footer-inner text-center w-100 d-flex align-items-center">
                    <marquee>
                        <div className="d-flex text-white">
                            <p className="text-uppercase pr-2">This is JERP development site, </p>
                            <p>Follow the instructions to embed the icon font in your site and learn how to style your icons using CSS.</p>
                        </div>
                    </marquee>
                </div>
            </div>
        );
    }
}

export default Footer;