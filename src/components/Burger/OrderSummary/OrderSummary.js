import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

    const ingredientsList = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });

    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>You created a burger with the following ingredients:</p>
            <ul>
                {ingredientsList}
            </ul>
            <p>Continue to Checkout</p>
        </Aux>
    );
};

export default orderSummary;