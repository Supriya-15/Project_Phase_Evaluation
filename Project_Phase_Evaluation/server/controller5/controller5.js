var Userdb5= require('../model/model5');

//create and save new user

exports.create=(req,res)=>{
    //va;lidare the requesst

    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    //new user
    const  user =new Userdb5({
        cmp_prs:req.body.cmp_prs,
        dm_ex:req.body.dm_ex   ,
        rs_ds:req.body.rs_ds,
        prj_rp:req.body.prj_rp,
                    dis:req.body.dis,
                          
    })
//save user in the databases
user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect("/phase3");
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occured while creatig a create operation"
        });
    });
}
