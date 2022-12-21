//IMPORT+INITIALISATION EXPRESS
let express= require("express");
let app= express();
app.use(express.urlencoded({extended: true}));

//CREATION SESSION
// app.use(session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true
// }))

//IMPORT ROUTE
let router= require("./routes");
app.use("/", router);

//CSS
app.use(express.static('public'))

//METHODE LISTEN
app.listen(5000,function(){
    console.log("Server is running on port 5000")
})

