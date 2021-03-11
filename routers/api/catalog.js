const express = require('express')
const router = express.Router()

const Catalog = require('../../models/Catalog')

//$route GET api/catalog
//@desc 获取全部
//@access public
router.get('/',
  (req, res) => {
    Catalog.find()
      .then(catalog => {
        if (!catalog) {
        return res.json('没发现任何东西呀！')
        }
        res.json(catalog)
    }).catch(err=>res.json(err))
  })
