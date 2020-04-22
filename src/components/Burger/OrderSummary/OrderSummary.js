import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button
                buttonType='Danger'
                clicked={props.handleOrderCancel}>CANCEL</Button>
            <Button
                buttonType='Success'
                clicked={props.handleOrderSuccess}>ORDER</Button>
        </Aux>
    );
};

export default orderSummary;