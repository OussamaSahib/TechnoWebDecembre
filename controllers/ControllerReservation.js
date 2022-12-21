//IMPORT MODEL
let Reservation= require("../models/ModelReservation");
let Voyageur= require("../models/ModelVoyageur");

//FCT 
let ListReservation= [];
exports.HomeForm= function(request, response){
    response.render("home.ejs",{reservation:ListReservation});
};

exports.HomeAdd= function(request, response){ 
    response.redirect("/home/voyageur");
};

exports.VoyageurForm= function(request, response){
    response.render("person.ejs");
};

exports.ValidationForm= function(request, response){
    response.render("validation.ejs");
};

exports.Validation= function(request, response){
    response.redirect("/home/validation");
};

exports.ConfirmationForm= function(request, response){
    response.render("confirmation.ejs");
};

exports.Confirmation= function(request, response){
    response.redirect("/home/confirmation");
};


