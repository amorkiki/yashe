const express = require('express')
const router = express.Router()

const Goods = require('../../models/Goods')

//$route GET api/goods
//@desc 获取全部商品信息
//@access public
router.get('/',
  (req, res) => {
    Goods.find()
      .then(goods => {
        if (!goods) {
        return res.json('没发现任何东西呀！')
        }
        res.json(goods)
    }).catch(err=>res.json(err))
  })

//$route POST api/goods/add
//@desc 新建商品
//@access public
router.post('/add',
  (req, res) => {
    Goods.findOne({ good_id: req.body.goods_id }).then(goods => {
      if (goods) {
        return res.json({
          data: null,
          meta:{msg:'这件东西已经存在啦',success:false}
      })
      } else {
        const GoodsFields = new Goods()
        GoodsFields.goods_id = req.body.goods_id
        GoodsFields.goods_cata = req.body.goods_cata
        GoodsFields.goods_pic = req.body.goods_pic
        GoodsFields.goods_title = req.body.goods_title
        GoodsFields.goods_price = req.body.goods_price
        GoodsFields.goods_desc = req.body.goods_desc
        GoodsFields.goods_store = req.body.goods_store
        
        GoodsFields.save().then(GoodsFields => {
          res.json({
            data: GoodsFields,
            meta:{msg:'商品添加成功',success:true}
          })
        }).catch(err=>res.json(err))
    }
  })
  })

//$router GET api/goods/:cata
//@desc 查询对应分类下的所有商品
//access public
router.get('/:cata',
  (req, res) => {
    Goods.find({ goods_cata: req.params.cata }) //注意这里如果写req.params.goods_cata就不行，要和/:cata后的参数一致
      .then(goods => {
        if (!goods) {
        return res.json('该分类下还没有任何宝贝喲')
        }
        const data = goods
        res.json({
          data,
          meta: {
            success:true
          }
        })
    }).catch(err=>res.json(err))
  })

//$router GET api/goods/find/:id
//@desc 查询单个商品
//access public  
router.get('/find/:id',   //这里地址如果还和上面一的级别 /:id  就会按上面的/:cata形式查找，所以在路径前加一级find关键字
  (req, res) => {
    Goods.findOne({ goods_id: req.params.id })
      .then(goods => {
        if (!goods) {
        return res.json('没找到你要的宝贝喲')
        }
        const data = goods
        res.json({
          data,
          meta: {
            success:true
          }
        })
      }).catch(err => res.json(err))
  })

module.exports=router