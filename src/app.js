const express = require("express");
const app = express();
const path = require("path");
const port = 3100;
require("./db/conn");
const Register = require("./models/registers");
const hbs = require("hbs");
const hostname = '0.0.0.0';



const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);



app.get("/",(req,res) => {
    res.render("index");
});



// create a new user 

app.post("/register", async(req,res) => {
    try{
        console.log(req.body);
        const user = new Register({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            message: req.body.message
        })
        console.log(req.body.name);
        const registered = await user.save();
        res.status(201).render("done");

    }catch(error){
        res.status(400).send(error);
    }


    // const user = req.body;
    
    // const newUser = new Register(user);
    // try{
    //     const registered = await newUser.save();
    //     res.status(201).json(registered);
    // } catch (error){
    //     res.status(409).json({ message: error.message});     
    // }
    
})

app.listen(port, (req,res) =>{
    console.log(`Starting Server from Port No: ${port}`);
})