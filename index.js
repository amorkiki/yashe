const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')



//import routers
const user = require('./routers/api/user')
const antique = require('./routers/api/antique')
const goods = require('./routers/api/goods')
const article = require('./routers/api/article')

//use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//connect to mongo
mongoose
  .connect('mongodb+srv://amork:jing985464@cluster0.izkq1.mongodb.net/test',{ useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => console.log("mongoDB connected"))
  .catch((error) => console.log(error));

const passport = require('passport')
app.use(passport.initialize())
require('./config/passport')(passport)

app.get("/", (req, res) => {
  res.send("hello yashe");
});


//use routers
app.use('/api/user',user)
app.use("/api/antique", antique)
app.use('/api/goods', goods)
app.use('/api/article',article)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`yashe server is running on port ${port}`)
})
