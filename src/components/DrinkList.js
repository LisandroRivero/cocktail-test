import React from 'react';
import Drink from './Drink';
import FullScreenDrink from './FullScreenDrink';
import './DrinkList.css'

class DrinkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drink: null,
        };
    }
    
    handleGoBack = (event) => {
        event.preventDefault();
        this.setState({ drink: null });
    }

    handleDrinkClick = idDrink => {
        const { getDrink } = this.props;
        getDrink(idDrink).then(data => {
            this.setState({ drink: data.drinks[0] });
        });
    }

    renderFullScreenDrink = () => {
        return <FullScreenDrink drink={this.state.drink} goBack={this.handleGoBack} />;
    }

    render() {
        const { drinks } = this.props;
        const drinkList = drinks.map(drink => {
            return <Drink key={drink.idDrink} description={drink.strDrink} image={drink.strDrinkThumb} onClick={() => this.handleDrinkClick(drink.idDrink)}/>;
        });
            
        return(
            <div className="MainContent">
                <div className="DrinkListContainer">
                    <div className="DrinkList">
                        {this.state.drink ? this.renderFullScreenDrink() : drinkList}
                    </div>
                </div>                
            </div>
        ); 
    }
}


export default DrinkList;