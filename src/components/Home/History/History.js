import React from 'react';
import './History.css';
import history1 from '../../../images/h1.jpg';
import history2 from '../../../images/h2.jpg';
import history3 from '../../../images/h3.jpg';

const History = () => {
    return (
        <section className='container history-main p-5'>
            <h2>History</h2>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <img style={{height:'350px', width:'270px'}} src={history1} alt=""/>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <h4>Recollecting History</h4>
                    <p>Scelerisque, felis eget Auctor dictum tempus molestie auctor consectetuer sit nisl,
                    tempor, ultrices velit nascetur ullamcorper torquent adipiscing felis interdum. Vel nibh.
                          Eget maecenas gravida urna nascetur sit. Taciti at suspendisse rutrum.</p>

                    <p> Donec quis tortor tempus, lacinia sem nec,
                    accumsan diam. Ut condimentum eget risus at ultrices. Integer molestie augue
                    eros, ac dignissim velit placerat ut. Sed vel leo ac eros tincidunt porttitor. Aliquam erat volutpat.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                <img style={{height:'350px', width:'270px'}} src={history2} alt=""/>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                <h4>Recollecting History</h4>
                <p>Scelerisque, felis eget Auctor dictum tempus molestie auctor consectetuer sit nisl,
                    tempor, ultrices velit nascetur ullamcorper torquent adipiscing felis interdum. Vel nibh.
                          Eget maecenas gravida urna nascetur sit. Taciti at suspendisse rutrum.</p>

                    <p> Donec quis tortor tempus, lacinia sem nec,
                    accumsan diam. Ut condimentum eget risus at ultrices. Integer molestie augue
                    eros, ac dignissim velit placerat ut. Sed vel leo ac eros tincidunt porttitor. Aliquam erat volutpat.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                <img style={{height:'350px', width:'270px'}} src={history3} alt=""/>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                <h4>Recollecting History</h4>
                <p>Scelerisque, felis eget Auctor dictum tempus molestie auctor consectetuer sit nisl,
                    tempor, ultrices velit nascetur ullamcorper torquent adipiscing felis interdum. Vel nibh.
                          Eget maecenas gravida urna nascetur sit. Taciti at suspendisse rutrum.</p>

                    <p> Donec quis tortor tempus, lacinia sem nec,
                    accumsan diam. Ut condimentum eget risus at ultrices. Integer molestie augue
                    eros, ac dignissim velit placerat ut. Sed vel leo ac eros tincidunt porttitor. Aliquam erat volutpat.</p>
                </div>
            </div>
        </section>
    );
};

export default History;