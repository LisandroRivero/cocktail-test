export const getDrinks = () => {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
        .then(drinks => {
            return drinks.json();
        });
};

export const getDrink = id => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(drink => {
            return drink.json();
        });
}