import React, { Component } from 'react';

import BodyHeader from './BodyHeader.js';
import BodyText from './BodyText.js';
import BodyList from './BodyList.js';
import BodyAuthorInfo from './BodyAuthorInfo.js';

const ingredients = {
    milk: '1 1/2 cups milk',
    mascarpone: '1/2 cup mascarpone',
    salt: '1/2 tsp pink salt',
    figs: '1lb Black Mission Figs'
}

export default class Body extends Component {
    render() {
        return (
            <main>
                <div className="border"></div>
                <BodyHeader productName={this.props.productName} postedDate={this.props.postedDate} productImage={this.props.productImage} />

                <BodyText />
                <BodyList ingredients={ingredients} />
                <BodyAuthorInfo />

                
            </main>

        );
    }
}