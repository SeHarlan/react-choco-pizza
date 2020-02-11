import React, { Component } from 'react';


export default class BodyHeader extends Component {
    render() {
        return (
            <section>
                <img src="./lab-assets/list-bg.png" id="list-pic" />
                <form>
                    <label>
                        <input type="checkbox" name="ingredients" value="milk" /> {this.props.ingredients.milk}
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="mascarpone" /> {this.props.ingredients.mascarpone}
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="salt" /> {this.props.ingredients.salt}
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="figs" /> {this.props.ingredients.figs}
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="brown-sugar" /> 1/2 cup brown sugar
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="water" /> 2-4 tbsp water
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="cream" /> 1 1/2 cups heavy cream
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="sugar" checked /> 1/3 granulated sugar 
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="yolks" checked /> egg yolks
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="lemon" /> 1 lemon, juiced
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="butter" /> 2 tbsp butter
                    </label>
                    <label>
                        <input type="checkbox" name="ingredients" value="pecans" /> 1 cup honey roasted pecans, roughly chopped
                    </label>
                </form>
            </section>
            
        );
    }
}




