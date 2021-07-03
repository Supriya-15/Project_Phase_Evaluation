const axios=require('axios');

exports.main=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('main',{users:response.data});
    
})
}

exports.reg_log=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('reg_log',{users:response.data});
})

}

exports.log=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('log',{users:response.data});
})
    
}

exports.regist=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('regist',{users:response.data});
})
}
// exports.register=(req,res)=>{
//      axios.get("http://localhost:3000/api/users")
//     .then(function(response){
//         console.log(response.data)
//         res.render('register',{users:response.data});
// })

// }


  


exports.phase1=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('phase1',{users:response.data});
})
}

exports.phase2=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('phase2',{users:response.data});
})
}
exports.phase3=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('phase3',{users:response.data});
})
}

exports.contact=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('contact',{users:response.data});
})
}


exports.login=(req,res)=>{
    //make request to the api users

    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        console.log(response.data)
        res.render('login',{users:response.data});
    })
    // res.render("login",{users:"New Data"});
    .catch(err=>{
        res.send(err);

    })
}

exports.add_user=(req,res)=>{
    res.render('add_user');
}

exports.update_user=(req,res)=>{


    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
     .then(function(userdata){
         console.log(userdata.data)
         res.render('update_user',{ user:userdata.data})
     })
.catch(err=>{
    res.send(err);
})

    //res.render('update_user');

    // res.render('update_user');
}
