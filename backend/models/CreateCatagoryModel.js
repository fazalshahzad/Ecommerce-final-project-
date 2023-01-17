
const mongoose = require("mongoose");

const CatagorySchema = mongoose.Schema({

CreateCatagory:{type:String, required:true}



})



module.exports=mongoose.model('CreateCatagory',CatagorySchema);
