import React, {Component} from 'react';
import classes from './Modal.css';
import Backdrop from './../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import PropTypes from "prop-types";
import BurgerIngredient from "../../Burger/BurgerIngredient/BurgerIngredient";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show
                || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    dismissModalHandler={this.props.dismissModalHandler}
                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vH)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
};

Modal.propTypes = {
    show: PropTypes.bool,
    dismissModalHandler: PropTypes.func
};

export default Modal;