import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1,
    cheese: 0.8,
    meat: 2
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const updatedTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice
        })
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;

        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const updatedTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice
        })

    };

    render() {

        const disabledIngredientsInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledIngredientsInfo) {
            disabledIngredientsInfo[key] = disabledIngredientsInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    disabledIngredientsInfo={disabledIngredientsInfo}
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;