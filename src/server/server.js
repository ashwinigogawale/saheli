
const express =require('express');
const bodyparser =require('body-parser');
const cors =require('cors');
const { KeyValueDiffers } = require('@angular/core');
const { GoogleMapsAPIWrapper } = require('@agm/core');
const { getMaxListeners } = require('process');
const PORT=3000;
const app=express();
app.use(bodyparser.json());
app.use(cors());

const register=[
  {firstname:'ashwini' , lastname:'Gogawale' , mobilenum:'898545768' , email:'ash@gamil.com' , msg:'hi'  }
]
app.get('/',function(req,res){
    res.send('hello from server');
})
app.get('/register',function(req,res){
  res.send(register);
})
app.post('/register',function(req,res){
    console.log(req.body);

    res.status(200).send({"message":"data recieved"});
})

app.listen(PORT,function(){
    console.log("server running on :" + PORT);
});

