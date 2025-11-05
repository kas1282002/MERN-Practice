const express=require('express');
const app=express();
const path=require('path');
// in dono line se ham aapne form ko use kar payenge.in dono line ko likhne se setting up hota hai parsers for form
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

//aab ham aaapna pehla route set kar rhe hai
app.get("/",function(req,res){
    res.render("index")
});

app.get("/profile/:username",function(req,res){
    res.send(`Welcome ${req.params.username}`)
});

app.get("/author/:username/:age",function(req,res){
    res.send(`Welcome ${req.params.username} of age ${req.params.age}`)
});


app.listen(3000,function(){
    console.log("Its Running");
    
}); 
// to check in browser http://localhost:3000/
