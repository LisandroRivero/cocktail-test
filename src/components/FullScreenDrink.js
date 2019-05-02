import React from 'react';
import DrinkInfo from './DrinkInfo';
import './FullScreenDrink.css';
import flecha from './left-arrow.png';

class FullScreenDrink extends React.Component {
    
    getDrinkIngredients = () => {
        const { drink } = this.props;
        const ingredients = [];

        for (let i=1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`] 
            if (ingredient !== '' && ingredient !== null ) {
                ingredients.push({
                    description: ingredient,
                    measure: drink[`strMeasure${i}`]
                });
            }
        }
        return ingredients;
    }

    render() {
        const { drink, goBack } = this.props;
        return (
            <div className='fullScreenDrink'>
                <div className="DrinkHeader">
                    <img className="BackArrow" src={flecha} onClick={(event) => { goBack(event) }}/>
                    <p className="DrinkName">{drink.strDrink}</p>
                </div>

                <img className='DrinkImage' src={drink.strDrinkThumb}></img>

                
                <ul>
                    <DrinkInfo drinkInfo={this.getDrinkIngredients()}/>
                </ul>
                
                <p>How to prepare:</p>
                <p>{drink.strInstructions}</p>
            </div>
        )
    }
}


export default FullScreenDrink;