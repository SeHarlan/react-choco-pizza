import React, { Component } from 'react';

export default class HeaderNav extends Component {
    render() {
        return (
            <div className="social-logos">
                    <img src={this.props.iconArray[0]} alt={this.props.iconArray[0]} />
                    <img src={this.props.iconArray[1]} alt={this.props.iconArray[1]} />
                    <img src={this.props.iconArray[2]} alt={this.props.iconArray[2]} />
                    <img src={this.props.iconArray[3]} alt={this.props.iconArray[3]} />
                    <img src={this.props.iconArray[4]} alt={this.props.iconArray[4]} />
                    <img src={this.props.iconArray[5]} alt={this.props.iconArray[5]} />
                    <img src={this.props.iconArray[6]} alt={this.props.iconArray[6]} />
            </div>
        );
    }
}