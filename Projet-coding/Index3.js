document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    let pseudo = document.getElementById("pseudo");
    let email = document.getElementById("email");
    let mdp = document.getElementById("mdp");
    let messageDiv = document.getElementById("messageDiv"); 
    let isValid = true;
    
    
    messageDiv.innerHTML = "";

    
    if (pseudo.value.length < 6) {
        pseudo.classList.add("error");
        messageDiv.innerHTML += "<p style='color: rgb(122, 17, 17);'>Le pseudo doit comporter au moins 6 caractères.</p>";
    } else {
        pseudo.classList.remove("error");
        pseudo.classList.add("success");
    }

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add("error");
        messageDiv.innerHTML += "<p style='color: rgb(122, 17, 17);'>L'email n'est pas valide.</p>";
        isValid = false;
    } else {
        email.classList.remove("error");
        email.classList.add("success");
    }

    
    if (mdp.value.length < 8) {
        mdp.classList.add("error");
        messageDiv.innerHTML += "<p style='color: rgb(122, 17, 17);'>Le mot de passe doit comporter au moins 8 caractères.</p>";
        isValid = false;
    } else {
        mdp.classList.remove("error");
        mdp.classList.add("success");
    }

   
    if (isValid) {
        messageDiv.innerHTML = "<p style='color: rgb(172, 255, 47);'>Formulaire soumis avec succès !</p>";
    }
});