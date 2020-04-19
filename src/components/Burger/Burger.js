import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} ingredientType={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients to your burger!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient ingredientType="bread-top" />
            {transformedIngredients}
            <BurgerIngredient ingredientType="bread-bottom" />
        </div>
    );
};

export default burger;