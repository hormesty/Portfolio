// cookies

var dropCookie = false; // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14; // Number of days before the cookie expires, and the banner reappears
var cookieName = 'TcomplianceCookie'; // Name of our cookie
var cookieValue = 'on'; // Value of cookie

function createDiv() {
    var bodytag = document.getElementsByTagName('footer')[0];
    var div = document.createElement('div');
    div.setAttribute('id', 'cookie-law');
    div.innerHTML = '<p> En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de <a href="/cookie-policy/" rel="nofollow" title="Cookie Policy">cookies</a> pour vous proposer <a href="/privacy-notice/" rel="nofollow" title="Privacy Notice">Privacy notice</a>. <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>OK</span></a></p>';
    // Be advised the Close Banner 'X' link requires jQuery

    bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
    // or
    // bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

    document.getElementsByTagName('footer')[0].className += ' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible

    createCookie(window.cookieName, window.cookieValue, window.cookieDuration); // Create the cookie
}


function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    if (window.dropCookie) {
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}

function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

window.onload = function() {
    if (checkCookie(window.cookieName) != window.cookieValue) {
        createDiv();
    }
}

function removeMe() {
    var element = document.getElementById('cookie-law');
    element.parentNode.removeChild(element);
}
// Fin cookies


// navbar

function myFunction() {
    var x = document.getElementById("content_nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Fin navbar


// Formulaire contact

document.getElementById("form_index").addEventListener("submit", function(e) {
    var erreur;
    var prenom = document.getElementById("exampleFormControlInput3");
    var nom = document.getElementById('exampleFormControlInput2');
    var email = document.getElementById('exampleFormControlInput1');
    var message = document.getElementById('exampleFormControlTextarea');

    if (!prenom.value) {
        erreur = "Veuillez renseignez un prenom";
    }
    if (!nom.value) {
        erreur = "Veuillez renseignez un nom";
    }
    if (!email.value) {
        erreur = "Veuillez renseignez un email";
    } else if (document.getElementById("message").value == "") {
        evenement.preventDefault();
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('formulaire envoyé');
    }
});

// Fin Formulaire contact