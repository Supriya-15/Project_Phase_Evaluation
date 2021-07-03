var express = require('express');
var router = express.Router();
var User = require('../models/user');
var User2 = require('../models/user2');
var Adduser = require('../models/add');
var Chat = require('../models/chat');
var Phase1= require('../models/phase1')
var Phase2= require('../models/phase2')
var Phase3= require('../models/phase3')
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId
router.get('/', function (req, res, next) {
	return res.render('main.ejs');
});

router.get('/index', function (req, res, next) {
	return res.render('index.ejs');
});

// router.get('/faculty2', function (req, res, next) {
// 	return res.render('faculty2.ejs');
// });
router.get('/contact', function (req, res, next) {
	return res.render('contact.ejs');
});



// router.get('/chat', function (req, res, next) {
// 	return res.render('chat.ejs');
// });



router.post('/chat', function(req, res, next) {
	console.log(req.body.msg);
	var  chat =new Chat({
		msg:req.body.msg
	});
	chat.save(function(res,err){
							if(err)
								console.log(err);
							else
								console.log('Success');
								res.redirect("/");
						});

					});




router.post('/index', function(req, res, next) {
	console.log(req.body);
	var personInfo = req.body;


	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({email:personInfo.email},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newPerson = new User({
							unique_id:c,
							email:personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf
						});

						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
});

router.get('/login', function (req, res, next) {
	return res.render('login.ejs');
});


router.post('/login', function (req, res, next) {
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});

router.get('/index1', function (req, res, next) {
	return res.render('index1.ejs');
});

router.post('/index1', function(req, res, next) {
	console.log(req.body);
	var personInfo = req.body;


	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User2.findOne({email:personInfo.email},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newPerson = new User2({
							unique_id:c,
							email:personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf
						});

						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
});



router.get('/login1', function (req, res, next) {
	return res.render('login1.ejs');
});


router.post('/login1', function (req, res, next) {
	//console.log(req.body);
User2.findOne({email:req.body.email},function(err,data){
		if(data){
			
			 if(data.password==req.body.password){
				
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});


router.get('/profile', function (req, res, next) {
	console.log("profile");
	User.findOne({unique_id:req.session.userId},function(err,data){
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/');
		}else{
			//console.log("found");
			return res.render('data.ejs', {"name":data.username,"email":data.email});
		}
	});
});


// router.get('/phase1', function (req, res, next) {
// 	return res.render('phase1.ejs');
// });
// router.post('/phase1', function (req, res, next) {
// 	console.log("add_user");
// 	const  newPrs =new Phase1({
// 		  group:req.body.group,
//          prb_dom:req.body.prb_dom,
//         lit_sur:req.body.lit_sur,
//         dsg_mth:req.body.dsg_mth,
//         dap:req.body.dap,
//          q_a:req.body.q_a
                        
//     })
// )}
	
router.get('/phase1', function (req, res, next) {
	return res.render('phase1.ejs');
});
router.post('/phase1', function (req, res, next) {
	console.log("add_user");
	const  newPrs =new Phase1({
		  group:req.body.group,
         prb_dom:req.body.prb_dom,
        lit_sur:req.body.lit_sur,
        dsg_mth:req.body.dsg_mth,
        dap:req.body.dap,
         q_a:req.body.q_a
                        
    })
//save user in the databases


newPrs.save(function (err,Prs){
	if(err)
	console.log(err);
	else
	{
	Phase1.find({},function(err,data){
		console.log("success")
		res.render('mark.ejs',{
			addusers:data
		})
	})
}
	
})

		
});

router.get('/phase2', function (req, res, next) {
	return res.render('phase2.ejs');
});
router.post('/phase2', function (req, res, next) {
	console.log("add_user");
	const  newPrs =new Phase2({
		  group:req.body.group,
         req_spe:req.body.req_spe,
        dsg:req.body.dsg,
        prj_prg:req.body.prj_prg,
        prj_plan:req.body.prj_plan,
         q_a:req.body.q_a
                        
    })
//save user in the databases


newPrs.save(function (err,Prs){
	if(err)
	console.log(err);
	else
	{
	Phase2.find({},function(err,data){
		console.log("success")
		res.render('mark2.ejs',{
			addusers:data
		})
	})
}
	
})

		
});

router.get('/phase3', function (req, res, next) {
	return res.render('phase3.ejs');
});
router.post('/phase3', function (req, res, next) {
	console.log("add_user");
	const  newPrs =new Phase3({
		  group:req.body.group,
         cmp_prs:req.body.cmp_prs,
        dm_ex:req.body.dm_ex,
        rs_ds:req.body.rs_ds,
        prj_rp:req.body.prj_rp,
         dis:req.body.dis
                        
    })
//save user in the databases


newPrs.save(function (err,Prs){
	if(err)
	console.log(err);
	else
	{
	Phase3.find({},function(err,data){
		console.log("success")
		res.render('mark3.ejs',{
			addusers:data
		})
	})
}
	
})

		
});

router.get('/mark',(req,res)=>{
	
	Phase1.find({},function(err,data){
		console.log("found")
		res.render('mark.ejs',{
			addusers:data
		})
	})
});
router.get('/mark2',(req,res)=>{
	
	Phase2.find({},function(err,data){
		console.log("found")
		res.render('mark2.ejs',{
			addusers:data
		})
	})
});
router.get('/mark3',(req,res)=>{
	
	Phase3.find({},function(err,data){
		console.log("found")
		res.render('mark3.ejs',{
			addusers:data
		})
	})
});

router.delete('/assign/:id',(req,res)=>{

    const id=req.params.id;

    Adduser.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot delete with id ${id}.may be is wrong`})
        }else{
            res.send({
                message:"User was deleted successfully"
            })
        }
    })
    .catch(err=>{
            res.status(500).send({
                message:"could not delte user with id = "+id
            });
        });



});

// router.get('/assign',(req,res) => {
// 	//console.log("assign");
// 	Adduser.find({},function(err,data){
		
// 			console.log("found");
// 			 res.render('assign.ejs', {
// 				addusers: data
// 			});
		
// 	});
// });



// router.get('/assign', function (req, res, next) {
// 	return res.render('assign.ejs');
// });


router.get('/add_user', function (req, res, next) {
	return res.render('add_user.ejs');
});
router.post('/add_user', function (req, res, next) {
	console.log("add_user");
	const  newPrs =new Adduser({
        ids:req.body.ids,
        names:req.body.names,
        email:req.body.email,
        dept:req.body.dept,
                    grade:req.body.grade,
                          grpno:req.body.grpno,
                               
                                      time:req.body.time,
                                            date:req.body.date,
                                                  link:req.body.link
    })
newPrs.save(function (err,Prs){
	if(err)
	console.log(err);
	else
	console.log('Success');
})
		
});

router.get('/assign',(req,res) => {
	//console.log("assign");
	Adduser.find({},function(err,data){
		
			console.log("found");
			 res.render('assign.ejs', {
				addusers: data
			});
		
	});
});

router.get('/faculty',(req,res) => {
	//console.log("assign");
	
	Adduser.find({email:req.body.email},function(err,data){
		console.log("faculty page");
		if(!data){
			res.send({"Success":"You are not assigned any work"});

		}
		else{
			
			res.send({"Success":"You assignment is "});
		}
	});
});

//var email= 

 router.get('/faculty2',(req,res,next)=>{
	 //console.log(req.params.email);
 //.then(function(data){
     var email= req.body.email;
     
	 //Adduser.update({"email":email},},)
     

	//console.log("assign");
	// const email= req.params.email;
	 //console.log(email);
	Adduser.find({},function(err,data){
		
		//if(err) res.send({"Success":"You are not assigned any value"})
			// console.log("found");
			//  console.log(data);
			// if(data){
			// 	console.log("if part")
			// 	 res.render('faculty2.ejs', {
			// 	addusers: data
			 
			//  });
			// 	res.send({"Success":"You are not assigned any work"})
			//  }
			//  else{
		 	console.log("else part")
     //else
	// {
			res.render('faculty2.ejs', {
				addusers: data
		 });
	

	});		

});




router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/');
    	}
    });
}
});

router.get('/forgetpass', function (req, res, next) {
	res.render("forget.ejs");
});

router.post('/forgetpass', function (req, res, next) {
	//console.log('req.body');
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		console.log(data);
		if(!data){
			res.send({"Success":"This Email Is not regestered!"});
		}else{
			// res.send({"Success":"Success!"});
			if (req.body.password==req.body.passwordConf) {
			data.password=req.body.password;
			data.passwordConf=req.body.passwordConf;

			data.save(function(err, Person){
				if(err)
					console.log(err);
				else
					console.log('Success');
					res.send({"Success":"Password changed!"});
			});
		}else{
			res.send({"Success":"Password does not matched! Both Password should be same."});
		}
		}
	});
	
});

router.get('/forgetpass1', function (req, res, next) {
	res.render("forget1.ejs");
});

router.post('/forgetpass1', function (req, res, next) {
	//console.log('req.body');
	//console.log(req.body);
	User2.findOne({email:req.body.email},function(err,data){
		console.log(data);
		if(!data){
			res.send({"Success":"This Email Is not regestered!"});
		}else{
			// res.send({"Success":"Success!"});
			if (req.body.password==req.body.passwordConf) {
			data.password=req.body.password;
			data.passwordConf=req.body.passwordConf;

			data.save(function(err, Person){
				if(err)
					console.log(err);
				else
					console.log('Success');
					res.send({"Success":"Password changed!"});
			});
		}else{
			res.send({"Success":"Password does not matched! Both Password should be same."});
		}
		}
	});
	
});



router.get('/update/(:id)',function(req,res,next){
	var o_id = new ObjectId(req.params.id);
console.log(req.params._id);

Adduser.find({"_id": o_id}).toArray(function(err, result) {
		if(err) return console.log(err)
		
		// if user not found
		if (!result) {
			req.flash('error', 'User not found with id = ' + req.params.id)
			res.redirect('/assign')
		}
// if(!req.body){
//         return res
//         .status(400)
//         .send({message:"data to update can not be empty"})
//     }

else{
	res.render('update',{
		id:result[0]._id,
        ids:result[0].ids,
        names:result[0].names,
        email:result[0].email,
        dept:result[0].dept,
                    grade:result[0].grade,
                          grpno:result[0].grpno,
                               
                                      time:result[0].time,
                                            date:result[0].date,
                                                  link:result[0].link
    })
}
})
})



router.put('/update/(:id)',function(req,res,next){
	
console.log(req.params._id);

// if(!req.body){
//         return res
//         .status(400)
//         .send({message:"data to update can not be empty"})
//     }
console.log("add_user");
	const  newPrs =new Adduser({
		
        ids:req.body.ids,
        names:req.body.names,
        email:req.body.email,
        dept:req.body.dept,
                    grade:req.body.grade,
                          grpno:req.body.grpno,
                               
                                      time:req.body.time,
                                            date:req.body.date,
                                                  link:req.body.link
    })

    const o_id= new ObjectId(req.params.id);
    AddUser.findByIdAndUpdate({"_id":o_id},newPrs ,function(err,result){
               if (err) {
				req.flash('error', err)
				
				// render to views/user/edit.ejs
				res.render('update',  {
				
				ids:req.body.ids,
        names:req.body.names,
        email:req.body.email,
        dept:req.body.dept,
                    grade:req.body.grade,
                          grpno:req.body.grpno,
                               
                                      time:req.body.time,
                                            date:req.body.date,
                                                  link:req.body.link


			})
		 } else {
				req.flash('success', 'Data updated successfully!')
				
				res.redirect('/add_user')
				
				// render to views/user/edit.ejs
				/*res.render('user/edit', {
					title: 'Edit User',
					id: req.params.id,[[]]
					name: req.body.name,
					age: req.body.age,
					email: req.body.email
				})*/
			}
		})		
	})





module.exports = router;



// router.get('/show1', function (req, res, next) {
// 	console.log("show1");
// 	Adduser.find({unique_id:req.session.userId},function(err,data){
// 		console.log("data");
// 		console.log(data);
// 		if(!data){
// 			res.redirect('/');
// 		}else{
// 			//console.log("found");
// 			return res.render('assign.ejs', {"ids":data.ids,"names":data.names,"email":data.email,"dept":data.dept,"grade":data.grade,"grpno":data.grpno,"phase":data.phase,"time":data.time,"date":data.date,"link":data.link});
// 		}
// 	});
// });

// router.get('/assign', function (req, res, next) {
// 	console.log("assign");
// 	User.findOne({unique_id:req.session.userId},function(err,data){
// 		console.log("data");
// 		console.log(data);
// 		if(!data){
// 			res.redirect('/');
// 		}else{
// 			//console.log("found");
// 			return res.render('assign.ejs', {"name":data.username,"email":data.email});
// 		}
// 	});
// });
// router.get('/assign', function (req, res, next) {
// 	console.log("show");
// 	Adduser.findAll(function(err,data){
// 		console.log("data");
// 		console.log(data);
// 		if(!data){
// 			res.redirect('/');
// 		}
// 		else
// 		{
// 			return res.render('assign.ejs',{"ids":data.ids,"names":data.names,"email":data.email,"dept":data.dept,"grade":data.grade,"grpno":data.grpno,"phase":data.phase,"time":data.time,"date":data.date,"link":data.link});

// 		}
// 	});
	
	
// });