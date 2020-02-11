import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <img src="./lab-assets/small-logo.png" alt="delicious logo" />
                <aside>
                <p>Delicious &copy 2013 &#183 All Rights Reserved.</p>
                <p>Proudly puplished with Ghost.</p>
                </aside>
            </footer>

        );
    }
}