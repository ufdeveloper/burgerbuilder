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
            {
                controls.map(control => {
                    return <BuildControl addIngredientHandler={() => props.addIngredientHandler(control.type)}
                                         key={control.label}
                                         label={control.label} />
                })
            }
        </div>
    );
};

export default buildControls;