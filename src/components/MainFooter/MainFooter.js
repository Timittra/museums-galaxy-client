import React from 'react';
import './MainFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/logo.jpg';

const MainFooter = () => {
    return (
        <section id="foot" class="big-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="foot-main-common">
                        <div class="foot-common-head">
                            <h3>Location</h3>
                        </div>
                        <div class="foot-common-content">
                            <p>Madame Tussauds Hollywood
                             6933 Hollywood Blvd, Hollywood, CA 90028, United States</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="foot-main-common">
                        <div class="foot-common-head">
                            <h3>Stay Connected</h3>
                        </div>
                        <div class="foot-icon">
                            <ul>
                                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                <li><FontAwesomeIcon icon={faTwitter} /></li>
                                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="foot-main-common">
                        <div class="foot-common-head">
                            <h3>Museum's Galaxy</h3>
                        </div>
                        <div class="foot-common-content">
                            <img style={{height:'80px', width:'120px', zIndex:'1', border:'2px solid white'}} src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default MainFooter;