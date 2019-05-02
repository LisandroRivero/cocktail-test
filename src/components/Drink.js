import React from 'react';
import './Drink.css';

class Drink extends React.Component {
    render() {
        const { description, image } = this.props;
        return (
            <div
                className="Drink"
                onClick={this.props.onClick}
            >
                <p className="DrinkDescription">{description}</p>          
            </div>
        );
    }
}

export default Drink;