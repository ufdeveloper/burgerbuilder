import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];

    return (
        <div className={classes.BuildControls}>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(control => {
                    return <BuildControl addIngredientHandler={() => props.addIngredientHandler(control.type)}
                                         removeIngredientHandler={() => props.removeIngredientHandler(control.type)}
                                         disabled={props.disabledIngredientsInfo[control.type]}
                                         key={control.label}
                                         label={control.label} />
                })
            }
            <button
                onClick={props.ordered}
                disabled={!props.purchasable}
                className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;