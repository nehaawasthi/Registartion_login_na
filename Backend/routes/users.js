const express = require("express");
const router = new express.Router();
const users = require('../services/users');
const login = require('../services/login');

router.post("/users", (req, res) => {
    const data = req.body;
    console.log('data>>>>>>>>',data.password);
    users.addUsers(data).then(resData =>{
        console.log('dsfsghf',resData)
        res.status(201).send(resData);
    }).catch(err =>{
        console.log(err);
    })
    
});

router.post("/login", (req, res) => {
    const data = req.body;
    console.log('data>>>>>>>>',req.body);
    login.userLogin(data).then(resData =>{
        res.status(201).send(resData);
    }).catch(err =>{
        console.log(err);
    })
    
});


module.exports = router;
