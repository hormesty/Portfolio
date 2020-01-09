document.getElementById("form_index").addEventListener("submit",function(e){
  var erreur;
  var prenom = document.getElementById("exampleFormControlInput3");
  var nom = document.getElementById('exampleFormControlInput2');
  var email = document.getElementById('exampleFormControlInput1');
  var message = document.getElementById('exampleFormControlTextarea');

  if(!prenom.value) {
    erreur = "Veuillez renseignez un prenom";
  }
  if(!nom.value) {
    erreur = "Veuillez renseignez un nom";
  }
  if(!email.value) {
    erreur = "Veuillez renseignez un email";
  }
  else if (document.getElementById("message").value == "") {
                 evenement.preventDefault();
               }
  if (erreur) {
      e.preventDefault();
    document.getElementById ("erreur").innerHTML = erreur;
     return false;
  }else {
      alert('formulaire envoyé');
  }
});



function myFunction() {
  var x = document.getElementById("content_nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
