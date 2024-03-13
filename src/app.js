const fs = require('fs');
const express = require('express');
const app = express();


const productNames = JSON.parse(
    fs.readFileSync(`${__dirname}/data/names.json`, 'utf-8')
);


app.use(express.json());


app.get('/api/v1/names/:id', (req, res) => {
    const { id } = req.params;
    const product = productNames.find(p => p.id === parseInt(id));

    if (product) {
        res.status(200).json({
            status: 'success',
            message: 'Product name fetched successfully',
            data: { name: product }
        });
    } else {
        res.status(404).json({
            status: 'failed',
            message: 'Not found!'
        });
    }
});


module.exports = app;
