# Pizza Parlor

#### A Pizza Builder app

#### By _**Scott Hutley**_

## Technologies Used

* html
* bootstrap and css
* jQuery and javascript

## Description

A simple pizza maker that lets the user select the size and toppings they'd like on their pizza, then have their order repeated back to them with a total cost.

## Setup/Installation Requirements

* Clone this repository to an empty folder or to your desktop. Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
* Navigate to index.html and open with your web browser.

## Known Bugs

* Just a whole lot of css needed and some general display tidying-up to do.

## License

[MIT](https://opensource.org/licenses/MIT)

_Copyright (c) 2021 Scott Hutley_

## Contact Information

_Scott Hutley <scotthutley1@comcast.net>_

Specs
```
Pizza
Test: It should create a new pizza with the size, topping and price set to 0.
Code: new Pizza ("Small", "Pepperoni")
Expected: Pizza {size: "Small", topping: "Pepperoni", price: 0}
```
```
Test: It should create a pizza with two toppings.
Code: new Pizza ("Small", ["Pepperoni", "Ham"])
Expected: Pizza {size: "Small", topping: Array(2), price: 0}
```
```
sizePrice
Test: It should change the cost of the pizza based upon the size selected.
Code: sizePrice ("Small")
Expected: 10
```


I am 100% certain my sizePrice and toppingPrice functions work, but I cannot for the life of me figure out how to call them within the dev tools to show that they are working. At this point I'm moving on though because I'm probably going to struggle with my UI code as well. If my functions don't work, I'll have a big pile of garbage regardless but I've got to get something done.

