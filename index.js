const fs = require('fs');
const csv = require('csv-parser');


let totalCustomerExpenditure = {};

fs.createReadStream('orders.csv')
    .pipe(csv())
    .on('data', (row) => {
        const customerId= row['customer_id']
        const pricePerUnit = Number(row['price_per_unit'])
        const quantity = Number(row['quantity'])

        const ordertotal = pricePerUnit * quantity;

        console.log(ordertotal, 'orderTotal')
    })

    // .on('data', (data) => results.push(data))
    // .on('end', () => {
    //   console.log(results);
    // });


// fs.createReadStream('data.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//   });