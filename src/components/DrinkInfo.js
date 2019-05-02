import React from 'react';

class DrinkInfo extends React.Component {
    render() {
        const { drinkInfo } = this.props;
        const drinkIngredients = drinkInfo.map((ingredient, index) => {
            return <li key={index}>{ingredient.description} - {ingredient.measure}</li>
        });

        return drinkIngredients;
    }
}

export default DrinkInfo;