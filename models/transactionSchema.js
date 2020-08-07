 const mongoose = require('mongoose');

 const transactSchema = new mongoose.Schema({
   description: {
     type: String,
     required: [true, "Description is required"]
   },
   date: {
     type: String,
     required: [true, "Date is required"] 
   },
   
   debit : {
     type: Number,
     default: 0,
     
   },
   credit: {
    type: Number,
    default: 0,
    
   },
   runningBalance: {
     type: Number,
     required: ['true', 'balance is required']
   }
 })
 module.exports = mongoose.model('transaction', transactSchema);