import React from 'react';
import classes from './Modal.css';
import Backdrop from './../Backdrop/Backdrop';
import Aux from './../../../hoc/Aux';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop
                show={props.show}
                dismissModalHandler={props.dismissModalHandler}
            />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vH)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    );
};

export default modal;