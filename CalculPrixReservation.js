let boutton= document.getElementById("bt_total");
boutton.addEventListener("click", CalculPrix);

function CalculPrix(event){
    let nb_place= document.getElementById("nbseat").value;
    let prix= document.getElementById("total");
    prix.innerText= "Total de la réservation : " +45*nb_place;

    event.preventDefault();
    event.stopPropagation();
}
