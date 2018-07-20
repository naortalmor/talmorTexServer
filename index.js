const express = require('express');
const app = express();
const orderRoutes = require('./routes/ordersRoutes');
const cors = require('cors');
app.use(cors());
app.use('/orders', orderRoutes);

app.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send("Wlecome Page")
});

app.listen(1111, () => {
    console.log("Server is running on port 1111")
});