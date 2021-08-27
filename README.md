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
```

I am 100% certain my sizePrice and toppingPrice functions work, but I cannot for the life of me figure out how to call them within the dev tools to show that they are working. At this point I'm moving on though because I'm probably going to struggle with my UI code as well. If my functions don't work, I'll have a big pile of garbage regardless but I've got to get something done.


Test: It should change the cost of the pizza if a topping is selected.


Will I need Pizza IDs like the address book?
Will there be pre-made pizzas to choose from like in movie tickets?


Need to pass:
Constructors and prototypes
application works
Specs in README


What the user needs:
input fields
- size of pizza    select buttons
- toppings on pizza    radio or dropdown buttons
To see the cost of the pizza at the end
submit buttons


get size and topping input from user (function)
calculate price of pizza (function)
return the result
