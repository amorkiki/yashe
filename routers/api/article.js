const express = require('express')
const router = express.Router()
const Article = require('../../models/Article')

//$router GET api/article
//@desc 获取全部文章
//@access public
router.get('/',
  (req, res) => {
    Article.find()
      .then(article => {
        if (!article) {
        return res.json('没找到任何文章喲')
        }
        res.json(article)
      })
    .catch(err=>res.json(err))
  })

//$router POST api/article/add
//@desc 新建文章
//@access public
router.post('/add',
  (req, res) => {
    Article.findOne({ article_num: req.body.article_num }).then(article => {
      if (article) {
        return res.json({
          data: null,
          meta:{msg:'这篇文已经提交过喽~',success:true}
      })
      } else {
        const ArticleFields = new Article()
        ArticleFields.article_content = req.body.article_content
        ArticleFields.article_author = req.body.article_author
        ArticleFields.article_title = req.body.article_title
        ArticleFields.article_num = req.body.article_num
        ArticleFields.article_thumb = req.body.article_thumb
        ArticleFields.article_focus = req.body.article_focus
        
        ArticleFields.save().then(ArticleFields => {
          res.json({
            data: ArticleFields,
            meta:{msg:'文章提交成功',success:true}
          })
        }).catch(err=>res.json(err))
    }
  })
  })
module.exports=router