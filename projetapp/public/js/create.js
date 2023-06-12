// Récupère le bouton "Create" depuis l'élément du DOM
var btnCreate = document.getElementById("btnCreate");

// Récupère le modal "Create" depuis l'élément du DOM
var createModal = document.getElementById("createModal");

// Récupère les éléments du formulaire depuis l'élément du DOM
var projectTitleInput = document.getElementById("projectTitleInput");
var projectDescriptionInput = document.getElementById("projectDescriptionInput");

// Ajoute un écouteur d'événement au bouton "Create"
btnCreate.addEventListener("click", function () {
    // Réinitialise les valeurs du formulaire
    projectTitleInput.value = "";
    projectDescriptionInput.value = "";

    // Affiche le modal "Create"
    var modal = new bootstrap.Modal(createModal);
    modal.show();
});
