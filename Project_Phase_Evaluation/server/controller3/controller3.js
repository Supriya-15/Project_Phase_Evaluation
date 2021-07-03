var Userdb3= require('../model/model3');

//create and save new user

exports.create=(req,res)=>{
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
