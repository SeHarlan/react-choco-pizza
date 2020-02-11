import React, { Component } from 'react';


export default class BodyHeader extends Component {
    render() {
        return (
            <section>
                <h1>{this.props.productName}</h1>
                <div className="article-heading">
                    <p className="sub-heading">Posted on {this.props.postedDate} / Desserts</p>
                    <div className="print">
                        <img src="/lab-assets/print-icon.png" alt="print icon" />
                        <p className="sub-heading">Print</p>
                    </div>
                </div>

                <img src={this.props.productImage} id="choco-pizza" alt={this.props.productName} />
            </section>
    );
    }
}