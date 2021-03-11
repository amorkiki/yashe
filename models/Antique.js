const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AntiqueSchema = new Schema({
  antique_num: {
    type: String,
    required:true
  },
  antique_type: {
    type:String
  },
  antique_pic: {
    type: String,
    required:true
  },
  antique_title: {
    type:String,
    required:true
  },
  start_price: {
    type:Number,
  },
  down_price: {
    type:Number,
  },
  current_price: {
    type: Number,
  },
  antique_desc: {
    type:String,
    required:true
  }
})
module.exports = Antique = mongoose.model('antique',AntiqueSchema)