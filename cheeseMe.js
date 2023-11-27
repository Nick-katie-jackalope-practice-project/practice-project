'strict mode'



const cheeses = [
    {
        "name": "Cheddar",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Brie",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Gouda",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Parmesan",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Roquefort",
        "type": "blue",
        "country_of_origin": "France"
    },
    {
        "name": "Camembert",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Manchego",
        "type": "semi-hard",
        "country_of_origin": "Spain"
    },
    {
        "name": "Gruyère",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Provolone",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Mozzarella",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Monterey Jack",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Feta",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Edam",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Colby",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Gorgonzola",
        "type": "blue",
        "country_of_origin": "Italy"
    },
    {
        "name": "Havarti",
        "type": "semi-soft",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Swiss",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Pepper Jack",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Stilton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Asiago",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cambozola",
        "type": "blue",
        "country_of_origin": "Germany"
    },
    {
        "name": "Fontina",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Limburger",
        "type": "semi-soft",
        "country_of_origin": "Germany"
    },
    {
        "name": "Jarlsberg",
        "type": "semi-hard",
        "country_of_origin": "Norway"
    },
    {
        "name": "Danish Blue",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Munster",
        "type": "semi-soft",
        "country_of_origin": "France"
    },
    {
        "name": "Blue Castello",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Brick",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Ricotta",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Queso Fresco",
        "type": "soft",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Cotija",
        "type": "hard",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Wensleydale",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Emmental",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Double Gloucester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Cabrales",
        "type": "blue",
        "country_of_origin": "Spain"
    },
    {
        "name": "Pecorino Romano",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Red Leicester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Caerphilly",
        "type": "semi-hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Wensleydale with Cranberries",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Stichelton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Halloumi",
        "type": "semi-soft",
        "country_of_origin": "Cyprus"
    },
    {
        "name": "Sbrinz",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Manouri",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Taleggio",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cashel Blue",
        "type": "blue",
        "country_of_origin": "Ireland"
    }
];


alert('Welcome to Cheese Me!')

///STEP 1///
const userCheeseInputChoice = (cheeses) => {
    let userCheeseInput = prompt('Would you like to search the cheese by name, type or country?');
    let cheeseSearch
    let filteredCheeses

    if (userCheeseInput === 'name') {
        cheeseSearch = prompt('Type cheese name')
        filteredCheeses = cheeses.filter(cheeses => cheeses.name.toLowerCase().includes(cheeseSearch.toLowerCase()));
        console.log(filteredCheeses);
    } else if (userCheeseInput === 'country') {
       cheeseSearch = prompt('Type cheese country');
        filteredCheeses = cheeses.filter(cheeses => cheeses.country_of_origin.toLowerCase().includes(cheeseSearch.toLowerCase()));
    }
    else if (userCheeseInput === 'type') {
        cheeseSearch = prompt('Type of cheese');
        filteredCheeses = cheeses.filter(cheeses => cheeses.type.toLowerCase().includes(cheeseSearch.toLowerCase()));}
    else {
        console.log('invalid');
        userCheeseInputChoice();
    } if (filteredCheeses.length === 0) {
        console.log('No cheeses found based on the search criteria.');
    } else {
        console.log('Filtered cheeses:');
        filteredCheeses.forEach(cheeses => {
            console.log(`${cheeses.name} is from ${cheeses.country_of_origin} and is a ${cheeses.type}`);
        });
    }

}

userCheeseInputChoice(cheeses);

///STEP 2///


