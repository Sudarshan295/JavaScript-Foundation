/*
14. Calculate the final order price
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item.
*/

const customerCart = [
    { unitPrice: 20, quantity: 3 },
    { unitPrice: 15, quantity: 2 },
    { unitPrice: 32, quantity: 5 },
    { unitPrice: 50, quantity: 1 },
  ];
  
  const calculateTotalCost = (customerCart) => {
    return customerCart.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    );
  };
  
  const totalCost = calculateTotalCost(customerCart);
  
  console.log(`Total Cost:${totalCost}`);
