import React, { Component } from 'react';
import './footer.css';

const Footer = () => (
    <div className="footer">
        <p className="small">
            Developed By Kevin Elberger 
        </p>
        <a 
            className="github"
            href="https://www.github.com/KevinElberger/repo-viewer"
        >
            <i className="fa fa-github"></i>
        </a>
    </div>
);

export default Footer;