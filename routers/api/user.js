const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken')
// const keys = require("../../config/keys");
const passport = require("passport");


const User = require('../../models/User')

//$router POST api/user/register
//@desc 注册
//access public
router.post('/register',
  (req, res) => {
    User.findOne({ u_mobile: req.body.u_mobile })
      .then(user => {
        if (user) {
          return res.json('该手机号已被注册@_@')
        } else {
          const newUser = new User({
            uname: req.body.uname,
            u_passwd: req.body.u_passwd,
            u_mobile: req.body.u_mobile,
            identity: req.body.identity,
            avatar: req.body.avatar,
          })
          //加密
          bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(newUser.u_passwd, salt, function(err, hash) {
                // Store hash in your password DB.
              if (err) throw err
              newUser.u_passwd = hash   // 密码变成hash值
              newUser.save()  //存储数据
                .then(user => res.json(user))
                .catch((err) => res.json(err));  
            });
          });
        }
    })
  })

// $route POST api/user/login
// @desc  返回token jwt passport
// @access public
router.post('/login',
  (req, res) => {
    const u_mobile = req.body.u_mobile
    const u_passwd = req.body.u_passwd
    
    User.findOne({ u_mobile }).then(user => {
      if (!user) {
        return res.json({msg:'该手机还未注册',success:false})
      }
       //匹配密码
    bcrypt.compare(u_passwd, user.u_passwd).then((isMatch) => {
      if (isMatch) {
          const rule = {
            name: user.uname,
            email: user.u_mobile,
            avatar: user.avatar,
            identity: user.identity,
          };
          jwt.sign(
            rule,
            'secret',
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                data: rule,
                meta: {
                  success: true,
                  token: "Bearer " + token, //Bearer后加空格
                },
              });
            }
          );
      } else {
        return res.json({ msg: "密码错误" });
      }
    });
    })
  
  })

// $route GET api/users/current
// @desc  return current user
// @access private
router.get('/current',
  passport.authenticate('jwt',{session:false}),
  (req, res) => {
    res.json({
      name: req.body.uname,
      mobile: req.body.u_mobile,
      identity: req.body.identity,
      introduction: req.body.u_intro,
      
  })
  })

// $route GET api/users/current
// @desc  return all users
// @access public
router.get('/',
  (req, res) => {
    user.find()
      .then(user => {
        if (!user) {
        return res.json('没找到任何用户！')
        }
        const data = user
        res.json({
          data,
          meta: {
            success:true
          }
        })
    }).catch(err=>res.json(err))
  }
)
module.exports=router