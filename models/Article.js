const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  article_content: {
    type: String,
    required:true
  },
  article_author: {
    type: String,
    required:true
  },
  article_title: {
    type: String,
    required:true
  },
  article_num: {
    type: String,
    required:true
  },
  article_thumb: {
    type:Number
  },
  article_focus: {
    type:Number
  }
})
module.exports = Article = mongoose.model('articles',ArticleSchema)