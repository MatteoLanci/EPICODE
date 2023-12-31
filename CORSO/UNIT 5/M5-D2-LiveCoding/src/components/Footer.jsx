import React, { Component } from 'react'
import { leftFooterPanelLinks, rightFooterPanelLinks } from '../data/footerLinks';
import { nanoid } from 'nanoid';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                {leftFooterPanelLinks.map((link) => {
                                    return(
                                        <li key={nanoid()}>{link.title}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                {rightFooterPanelLinks.map((link) => {
                                        return(
                                            <li key={nanoid()}>{link.title}</li>
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="https://mdbootstrap.com/"> Epibooks.com</a>
                </div>
            </footer>
        )
    }
}

export default Footer;