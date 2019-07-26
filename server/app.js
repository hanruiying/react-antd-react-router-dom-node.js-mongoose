const express = require('express');
const app = express();
// 引入解析post提交数据的body参数
var bodyParser = require('body-parser');
const router = require('./router/index.js')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(router);

app.listen(5000, function() {
    console.log('后台进程请求中。。。。')
})