// import * as express from 'express';

// const ordersRoutes = express.Router();

// ordersRoutes.route('/')
//     .get((req, res, next) => {
//         Orders.find((err, orders) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(orders);
//             }
//         })
//     });
// ordersRoutes.route('/delete').post((req, res, next) => {
//     Orders.deleteOne({id: req.body.order.id}, (err, response) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.send(response)
//         }

//         res.send(req.body.order)
//     })
// })
//     .get((req, res) => {
//         res.send('ok');
//     });

// module.exports = ordersRoutes;
