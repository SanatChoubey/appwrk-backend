const transactionModel = require('../models/transactionSchema');


exports.transactionList = (req, res) =>{
  transactionModel.find().then((data)=>{
    res.send({
      success: true,
      data: data
    })
  }).catch(e=>{
    res.status(400).send({
      success: false,
      message: e.message
    }) 
  })
  
}
exports.addTransaction  = (req, res) =>{
  console.log('req', req.body)
  transactionModel.create(req.body).then((result) => { res.status(201).send({ Success: true, data: result }); })
  .catch((e) => { res.status(400).send({
    success: false,
    message: e.message
  }) })
  
}