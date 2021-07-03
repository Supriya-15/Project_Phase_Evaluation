var Userdb4= require('../model/model4');

//create and save new user

exports.create=(req,res)=>{
    //va;lidare the requesst

    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    //new user
    const  user =new Userdb4({
        req_spe:req.body.req_spe,
        dsg:req.body.dsg,
        prj_prg:req.body.prj_prg,
        prj_plan:req.body.prj_plan,
                    q_a:req.body.q_a,
                          
    })
//save user in the databases
user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect("/phase2");
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occured while creatig a create operation"
        });
    });
}
