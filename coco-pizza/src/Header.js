import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo-header">
                    <img src={this.props.logo} />
                    <div>
                        <h2>{this.props.companyName}</h2>
                        <p className="sub-heading">The Best Food Block on the Web.</p>
                    </div>
                </div>
                <div className="social-logos">
                    <img src={this.props.fbIcon} alt="facebook icon" />
                </div>
            </header>
        );
    }
}