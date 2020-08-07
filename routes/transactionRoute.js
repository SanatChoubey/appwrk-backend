const express = require('express')
const router = express.Router()
const { transactionList, addTransaction } = require('../controller/transaction');

router.route('/transaction')
  .get(transactionList)
  .post(addTransaction)

module.exports= router