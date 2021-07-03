const Userdb2= require('../model/model2');


exports.create=(req,res)=>{
    //va;lidare the requesst

    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    //try{
 const password = req.body.password;
 const conpass =req.body.conpass;

//  if(password === conpass)
//  {
    const  user =new Userdb2({

         name:req.body.name,
         id:req.body.id,

        email:req.body.email,
        password:req.body.password,
        conpass:req.body.conpass

    })
    
    
    user
    .save(user)
        .then(data =>{
            console.log(data);
            //res.redirect("/log");
            //res.send(data)
        }).catch(err =>{
            res.status(500).send({
                message:err.message || "Some error while creating the dbmodel"
            });
            });
        }

//  else
//  {
//      res.send({message:"Password and conform password should match"});
//  }
//}
// catch(error){
//     res.status(400).send(error)
// }}


exports.find=(req,res)=>{

    if(req.query.email){
        const email =req.query.email;

        Userdb2.findById(email)
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

// const log =(req,res)=>{
//     var user = req.body.emails
//     var pass =req.body.passwords

//     Userdb2.findOne({$or :[{email:user},{name:user}]})
//     .then(user => {
//         if(user){
//             if(pass == user.passwords)
//             {
//                 res.redirect('/login')
//             }
//             else
//             {
//                 res.redirect('/phase')
//             }


//         }
//         else{
//             res.send({
//                 message :'no user'
//             })
//         }


//     })


// }
// module.exports ={
//     log
// }







// exports.find=async(req,res)=>{
// try {
//   if(req.query.email){
//         const email =req.query.email;

//        Userdb2.find(email)
//         .then(data =>{
//             if(!data){
//                     res.status(404).send({message:"Not found user with id " + email})
//                 }
//                 else{
//                     console.log(data)
//                     res.send(data)
//                 }
//             })
//             .catch(err =>{
//                 res.status(500).send({message:"error retriving user with id " + email})
//             })
//   }
// }
// catch(error){
//     res.status(400).send("invalid email")

   
    
//     }
// }


 

