const categories = require('../controller/controller');

const app = require('express').Router();

app.route('/api/categories')
    .get(categories.get_Categories)
    .post(categories.create_Categories);


module.exports = app;