import React, {Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {

    state = {
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Shantanu Sardal',
                address: {
                    street: '100 99th St',
                    zipCode: '09876',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    purchasing: false
                })
            });
    }

    render() {

        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="street" placeholder="Your Street" />
                <input type="text" name="postal" placeholder="Your Postal Code" />
                <Button
                    buttonType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }

        return (
          <div className={classes.ContactData}>
              <h4>Enter your contact details</h4>
              {form}
          </div>
        );
    }
}

export default ContactData;