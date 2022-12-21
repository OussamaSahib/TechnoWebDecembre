//IMPORT+INITIALISATION EXPRESS
let express= require("express");
let router= express();


//IMPORT CONTROLLEUR
//Liste des routes vers le controlleur
router.get("/", (request, response)=>{
    response.redirect("/home");
})
let ControllerReservation= require("./controllers/ControllerReservation");
router.get("/home", ControllerReservation.HomeForm);
router.post("/home/new", ControllerReservation.HomeAdd);

router.get("/home/voyageur", ControllerReservation.VoyageurForm);

router.get("/home/validation", ControllerReservation.ValidationForm);
router.post("/home/valid", ControllerReservation.Validation);

router.get("/home/confirmation", ControllerReservation.ConfirmationForm);
router.post("/home/confirmation", ControllerReservation.Confirmation);


//EXPORT DU ROUTER
module.exports= router;


