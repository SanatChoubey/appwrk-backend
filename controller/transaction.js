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
  transactionModel.find().then((data)=>{
    console.log(data)
    if(data.length>0){
      const length = data.length-1
      const currentbalc = data[length].runningBalance+req.body.credit-req.body.debit 
      console.log(currentbalc)
      const datas = {
        ...req.body,
        runningBalance: currentbalc,
      }
      console.log(datas)
          transactionModel.create(datas).then((result) => { res.status(201).send({ Success: true, data: result }); })
          .catch((e) => { res.status(400).send({
            success: false,
            message: e.message
          }) })
    }else{
      const currentbalc = req.body.credit-req.body.debit 
      const data = {
        ...req.body,
        runningBalance: currentbalc,
      }
        transactionModel.create(data).then((result) => { res.status(201).send({ Success: true, data: result }); })
          .catch((e) => { res.status(400).send({
            success: false,
            message: e.message
          }) })
    }

  
  }).catch(e=>{
    res.status(400).send({
      success: false,
      message: e.message
    }) 
  })
  
  
}