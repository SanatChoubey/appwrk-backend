const mongoose = require('mongoose');
const dbConnect = () => {
  mongoose
.connect("mongodb+srv://Sanat:sanatc@cluster0-depho.mongodb.net/appwrk?retryWrites=true&w=majority",
 {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
   console.log('databse connected')
 }).catch(e=>{
   console.log(e)
 })
}

module.exports = dbConnect;

