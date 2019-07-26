const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
const Menu = require('../model/menuModel');
const Role = require('../model/roleModel');
router.post('/login', function(req, res) {
    User.findOne(req.body, function(err, ret) {
        if (ret === null) {
            let result = { msg: '用户名或密码错误！' };
            res.send(JSON.stringify(result));
        } else {
            res.send(ret);
        }
    })
})
router.get('/menu', function(req, res) {
    Menu.find(function(err, ret) {
        console.log(err, 'err');
        console.log(ret, 'ret');
        res.send(ret);
    })
})
router.get('/user', function(req, res) {
    User.find(function (err, ret) {
        if (ret === null) {
            let result = { msg: '用户为空' };
            res.send(JSON.stringify(result));
        } else {
            res.send(ret);
        }
    })
})
router.get('/role', function(req, res) {
    Role.find(function(err, ret) {
        if (ret == null) {
            res.send({msg: '没有查询到角色信息'})
        } else {
            res.send(ret);
        }
    })
})
router.post('/role/add', function(req, res) {
    new Role(req.body).save(function(err, ret) {
        if (err) {
            res.send({msg: '新增失败！'});
        } else {
            res.send({msg: '新增成功！'});
        }
    })
})
router.post('/role/update', function(req, res){
    Role.findOneAndUpdate({ _id: req.body._id }, { menu: req.body.menu }, function(err, ret) {
        if (err) {
            res.send({msg: '更新失败'});
        } else {
            res.send({msg: '更新成功'})
        }
    })
})
module.exports = router