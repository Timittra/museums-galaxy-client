import React from 'react';
import MainFooter from '../MainFooter/MainFooter';
import SmallFooter from '../SmallFooter/SmallFooter';
import './Footer.css';

const Footer = () => {
    return (
     <div className="footer-container">
         <MainFooter/>
         <SmallFooter/>
     </div>
    );
};

export default Footer;