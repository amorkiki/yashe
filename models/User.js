const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema
const UserSchema = new Schema({
  uname: {
    type: String,
    required:true
  },
  u_passwd: {
    type: String,
    required:true
  },
  u_mobile: {
    type: String,
  },
  avatar: {
    type:String
  },
  identity: {
    type: String,
    required:true,
    default:'青铜玩家'
  },
  u_intro: {
    type: String,
    required:true,
    default:'ta还没留下只言片语···'
  },
  u_location: {
    type:String
  },
  u_points: {
    type: Number,
    required:true,
    default:0
  }
})
module.exports = User = mongoose.model('user', UserSchema)
