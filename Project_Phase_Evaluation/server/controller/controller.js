var Userdb= require('../model/model');

//create and save new user

exports.create=(req,res)=>{
    //va;lidare the requesst

    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    //new user
    const  user =new Userdb({
        ids:req.body.ids,
        names:req.body.names,
        email:req.body.email,
        dept:req.body.dept,
                    grade:req.body.grade,
                          grpno:req.body.grpno,
                                phase:req.body.phase,
                                      time:req.body.time,
                                            date:req.body.date,
                                                  link:req.body.link
    })
//save user in the databases
user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect("/add_user");
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occured while creatig a create operation"
        });
    });
}


//retrive and return all user /retrive and return a single user
exports.find=(req,res)=>{

    if(req.query.id){
        const id =req.query.id;

        Userdb.findById(id)
        .then(data =>{
            if(!data){
                    res.status(404).send({message:"Not found user with id " + id})
                }
                else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({message:"error retriving user with id " + id})
            })
        

    }else{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "error occured while retriving user information"})
    })
    }

}

//update a new idetified user by user id

exports.update =(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"data to update can not be empty"})
    }

    const id= req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:`cannot update user with ${id}.Maybe user not found`})
        }
        else{
            res.send(data)
        }
        })
        .catch(err =>{
            res.status(500).send({message: "Error Update user information"})
        })
    }




//delete a user with specified user id in the request

exports.delete=(req,res)=>{
    const id=req.params.id;

    Userdb.findByIdAndDelete(id)
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



}

exports.create1=(req,res)=>{
    //va;lidare the requesst

    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    //new user
    const  user3 =new Userdb3({
        prb_dom:req.body.prb_dom,
        lit_sur:req.body.lit_sur,
        dsg_mth:req.body.dsg_mth,
        dap:req.body.dap,
         q_a:req.body.q_a
                        
    })
//save user in the databases
user3
    .save(user3)
    .then(data=>{
        // res.send(data)
        res.redirect("/phase1");
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occured while creatig a create operation"
        });
    });
}
