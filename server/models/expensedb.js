const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Category

const category_Schema = new Schema({
    type: { type: String, default: "savings" },
    color: { type: String, default: '#FCBE44' }
});

// transaction

const transaction_schema = new Schema({
    name: { type: String, default: 'Anonymous' },
    type: { type: String, default: 'Savings' },
    amount: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
});

const Categories = mongoose.model('categories', category_Schema);
const Transactions = mongoose.model('transactions', transaction_schema);

exports.default = Transactions;
module.exports = {
    Transactions, Categories
}