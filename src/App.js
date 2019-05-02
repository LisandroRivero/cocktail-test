import React from 'react';
import { getDrinks, getDrink } from './service';
import DrinkList from './components/DrinkList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        drinks: [],
    }
  }

  componentDidMount() {
    getDrinks().then(data => {
      this.setState({ drinks: data.drinks });
    });
  }
  
  render() {
    return (
      <div>
        <DrinkList drinks={this.state.drinks} getDrink={getDrink} />
      </div>
    )
  }
}

export default App;