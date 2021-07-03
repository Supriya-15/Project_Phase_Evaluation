var Userdb2= require('../model/model2');
exports.find=(req,res)=>{

    if(req.query.email){
        const email =req.query.email;

        register.findById(email)
        .then(data =>{
            if(!data){
                    res.status(404).send({message:"Not found user with id " + email})
                }
                else{
                    res.send(data)
                    res.redirect('/login')
                }
            })
            .catch(err =>{
                res.status(500).send({message:"error retriving user with id " + email})
            })
        

    }else{
    Userdb.find()
    .then(user=>{
        res.send(user)
        res.redirect('/login')
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "error occured while retriving user information"})
    })
    }

}