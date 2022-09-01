import React from 'react';
import footerBG from '../../assets/images/footer.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className=" pb-10 text-neutral"
            style={{
                background: `url(${footerBG})`,
                backgroundSize: 'cover'
            }}
        >
            <div className='footer p-10'>
                <div>
                    <span className="footer-title">Services</span>
                    <p className="link link-hover">Branding</p>
                    <p className="link link-hover">Design</p>
                    <p className="link link-hover">Marketing</p>
                    <p className="link link-hover">Advertisement</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <p className="link link-hover">About us</p>
                    <p className="link link-hover">Contact</p>
                    <p className="link link-hover">Jobs</p>
                    <p className="link link-hover">Press kit</p>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </div>
            </div>
            <div className='text-center'>
                <p>Copyright © {year} - All right reserved by Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;