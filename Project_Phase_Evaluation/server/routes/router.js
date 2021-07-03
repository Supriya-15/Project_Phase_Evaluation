const { Router } = require('express');
const express=require('express');
const route=express.Router();


const services=require('../services/render')
const controller =require('../controller/controller')
const controller2 =require('../controller2/controller2')
const controller3 =require('../controller3/controller3')
const controller4 =require('../controller4/controller4')
 const controller5 =require('../controller5/controller5')
 const controller6 =require('../controller6/controller6')
  const Userdb = require('../model/model');
// const Userdb2 = require('../model/model2');

route.get('/',services.main)
/** 
*@description Root Router
*@method GET/
*/
 route.get('/login',services.login);

 route.get('/reg_log',services.reg_log);
// route.get('/login',services.login);
 route.get('/contact',services.contact);


/** 
*@description add user
*@method GET/add_user
*/

 route.get('/add_user',services.add_user)

 route.get('/phase1',services.phase1)
route.get('/phase2',services.phase2)
route.get('/phase3',services.phase3)

 route.get('/log',services.log)
/** 
*@description for update user
*@method GET/update_user
*/

 route.get('/update_user',services.update_user)
 route.get('/log',services.log)
 route.get('/regist',services.regist)

//API


route.post('/api/users',controller.create);
route.get('/api/user2',controller2.find);

route.post('/api/user2',controller2.create);




    

  route.post('/api/user3',controller3.create);
  route.post('/api/user4',controller4.create);
  route.post('/api/user5',controller5.create);

route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports=route