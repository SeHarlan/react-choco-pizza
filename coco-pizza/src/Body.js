import React, { Component } from 'react';

import BodyHeader from './BodyHeader.js'

export default class Body extends Component {
    render() {
        return (
            <main>
                <div className="border"></div>
                <BodyHeader productName={this.props.productName} postedDate={this.props.postedDate} productImage={this.props.productImage} />
            </main>

        );
    }
}