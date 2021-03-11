const express = require("express")
const router = express.Router()
const Antique = require("../../models/Antique")

router.get('/test', (req, res) => {
  res.json({msg:'it works'})
})
//$route GET api/antique
//@desc 获取全部古董信息
//@access public
router.get('/',
  (req, res) => {
    Antique.find()
      .then(antique => {
        if (!antique) {
          return res.json('没发现任何内容呀~')
        }
        res.json(antique)
      })
    .catch(err=>res.json(err))
  })

// $route POST api/antique
// @desc 创建古董信息
// @access 
router.post('/add',
  (req, res) => {
    Antique.findOne({ antique_num: req.body.antique_num }).then(antique => {
      {
        if (antique) {
          return res.json({
            data: null,
            meta:{msg:'这个宝贝已经存在啦~',success:false}
          })
        } else {
          const AntiqueFields = new Antique()
            AntiqueFields.antique_title=req.body.antique_title,
            AntiqueFields.antique_type=req.body.antique_type,
            AntiqueFields.antique_desc=req.body.antique_desc,
            AntiqueFields.antique_num = req.body.antique_num,
            AntiqueFields.antique_pic = req.body.antique_pic,
          AntiqueFields.save().then(AntiqueFields => {
            res.json({
              data: AntiqueFields,
              meta:{msg:'古董添加成功~',success:true}
            })
          }).catch(err=>res.json(err))
      }
    }})
  }

)

// $route GET api/antique/：cata
// @desc 按分类查找
// @access 
router.get('/:cata',
  (req, res) => {
    Antique.find({ antique_type: req.params.cata })
      .then(antique => {
        if(!antique){
          return res.json('该类别下还没有宝贝呢~')
        }
        const data = antique
        res.json({
          data,
          msg:{success:true}
        })
      })
  })

// $route GET api/antique/find/:id
// @desc 按id查找
// @access 
router.get('/find/:id',
  (req, res) => {
    Antique.find({ antique_num: req.params.id })
      .then(antique => {
        if(!antique){
          return res.json('没找到相关宝贝喲~')
        }
        const data = antique
        res.json({
          data,
          msg:{success:true}
        })
      })
  })

  
module.exports = router;
