import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p className="small">
                    Developed By Kevin Elberger | 
                </p>
                <a 
                    className="github" 
                    href="https://www.github.com/KevinElberger/repo-viewer"
                >
                    <i className="fa fa-github"></i>
                </a>
            </div>
        );
    }
}

export default Footer;