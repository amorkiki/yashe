const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatalogSchema = new Schema({
  catalog_id: {
    type:String
  },
  catalog_name: {
    type:String
  }
})
module.exports = Catalog = mongoose.model('catalog',CatalogSchema)