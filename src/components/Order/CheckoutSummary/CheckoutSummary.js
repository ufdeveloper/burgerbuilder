import React from 'react';
import Burger from '../../Burger/Burger';
import Button from "../../UI/Button/Button";
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                buttonType="Danger"
                clicked={props.checkoutCancelHandler}>CANCEL</Button>
            <Button
                buttonType="Success"
                clicked={props.checkoutSuccessHandler}>SUCCESS</Button>
        </div>
    );
};

export default checkoutSummary;
