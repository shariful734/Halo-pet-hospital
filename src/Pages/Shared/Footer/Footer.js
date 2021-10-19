import './Footer.css'
import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container bg-primary text-center">

            <footer>
                <h3 className="text-white pb-3">Contact Information</h3>

                <address>
                    <h5><i class="fas fa-map-marker-alt"></i> Sherpur Road, Nabiganj, Habiganj</h5>

                    <h5><i class="fas fa-phone"></i> 0126183662</h5>

                    <h5><i class="far fa-envelope"></i> <a className="link" href="http://google.com"> Shoriful@gmail.com</a> </h5>

                </address>

                <p>© 2021  All Rights Reserved  Terms of Use  and  Privacy Policy</p>

            </footer>
        </div>
    );
};

export default Footer;