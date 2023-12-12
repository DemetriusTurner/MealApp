// Picks the type of protien in the meal
const typeOfProtein = () => {
    const randomNum = Math.floor(Math.random() * 6);
    let protein = '';
    switch (randomNum) {
        case 0:
            protein = 'beef';
            break;
        case 1:
            protein = 'steak';
            break;
        case 2:
            protein = 'pork';
            break;
        case 3:
            protein = 'chicken';
            break;
        case 4:
            protein = 'fish';
            break;
        case 5:
            protein = 'shrimp';
            break;
        default:
            protein = 'N/a';
            break;
    }
    return protein;
};
// Picks the toppings for the meal
const typeOfToppings = () => {
    let toppings = [];
    let uniqueToppings = [];
    for (let i = 0; i < 2; i++) {
        const randomNum = Math.floor(Math.random() * 7);
        let randTopping = '';
        switch (randomNum) {
            case 0:
                randTopping = 'cheese';
                break;
            case 1:
                randTopping = 'corn';
                break;
            case 2:
                randTopping = 'lettuce';
                break;
            case 3:
                randTopping = 'sour cream';
                break;
            case 4:
                randTopping = 'onions';
                break;
            case 5:
                randTopping = 'guac';
                break;
            case 6:
                randTopping = 'salsa';
                break;
            default:
                randTopping = 'N/a';
                break;
        }
        toppings.push(randTopping);
    }
    // Makes sure that no toppings repeat
    toppings.forEach(x => {
        if (!uniqueToppings.includes(x)) {
            uniqueToppings.push(x);
        }
    });
    return uniqueToppings.join(' and ');
};
// Picks the side included in the meal
const typeOfSide = () => {
    const randomNum = Math.floor(Math.random() * 5);
    let side = '';
    switch (randomNum) {
        case 0:
            side = 'fries';
            break;
        case 1:
            side = 'mac and cheese';
            break;
        case 2:
            side = 'rice';
            break;
        case 3:
            side = 'soup';
            break;
        case 4:
            side = 'salad';
            break;
        default:
            side = 'N/a';
            break;
    }
    return side;
};
// Builds the meal
const randTacoMeal = () => {
    console.log(`You should try a ${typeOfProtein()} taco with ${typeOfToppings()}. Along with a side of ${typeOfSide()}.`);
};

randTacoMeal();