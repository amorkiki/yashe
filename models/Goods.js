const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GoodsSchema = new Schema({
  goods_id: {
    type: String,
    required:true
  },
  goods_cata: {
    type: String,
    required:true
  },
  goods_pic: {
    type: String,
    required:true
  },
  goods_title: {
    type:String,
    required:true
  },
  goods_price: {
    type:Number,
    required:true
  },
  goods_desc: {
    type:String,
    required:true
  },
  goods_store: {
    type:Number
  }
})
module.exports = Goods = mongoose.model('goods',GoodsSchema)