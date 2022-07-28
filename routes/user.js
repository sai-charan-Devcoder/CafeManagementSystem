const express=require('express');
const connection=require('../connection');
const router=express.Router();

router.post('/signup',(req,res)=>{
    let user=req.body;
    query="select email,status,password,role from user where email=?"
    connection.query(query,[user.email],(err,results)=>{
        if(!err){
          if(results.length<=0){
              query="insert into user(name,contact,email,password,status,role) values(?,?,?,?,'false','user')";
              connection.query(query,[user.name,user.contact,user.email,user.password],(err,results)=>{
                  if(!err){
                      return res.status(200).json({message:"successfully registerd"});
                  }
                  else{
                      return res.status(500).json(err);
                  }
              });
          }
          else{
              return res.status(400).json({message:"Email already Exits"});
          }
        }
        else {
            return res.status(500).json(err);
        }
    });
   
})


module.exports=router;