const item = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 }
];

// Filter and show cheap items (price < priceAvg/2)
const priceAvg = item.reduce((acc, cur) => acc + cur.price, 0) / item.length;
const cheapItems = item.filter(item => item.price < priceAvg / 2);
console.log('List of cheap items: ', cheapItems);

// Filter and show expensive items (price > priceAvg/2)
const expensiveItems = item.filter(item => item.price > priceAvg / 2);
console.log('List of expensive items: ', expensiveItems);

// Calculate the full price of all product combined
const totalPrice = item.reduce((acc, cur) => acc + cur.price, 0);
console.log('Total price of all items: ', totalPrice);

// Calculate the full price of all product combined and remove product that are under the 10 dollar
const totalPriceAbove10$ = item.filter(item => item.price > 10).reduce((acc, cur) => acc + cur.price, 0);
console.log('Total price of all items whose price is above 10 price : ', totalPriceAbove10$);