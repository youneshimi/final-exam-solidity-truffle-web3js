// SPDX-License-Identifier: MIT

const CONTRACT_ADDRESS = '0x...'; // Remplacez par votre adresse de contrat

// Vérifier si MetaMask est installé
if (typeof window.ethereum === 'undefined') {
  alert("Please install MetaMask to use this dApp!");
  throw new Error("MetaMask not detected");
}

// Créer une instance du contrat ProjetContract
const projetContract = new ethers.Contract(CONTRACT_ADDRESS, abi, ethereum);

// Fonction pour créer un projet
function createProject() {
  const title = prompt("Enter the project title");
  const description = prompt("Enter the project description");

  // Appel à la fonction creerProjet du smart contract
  projetContract.creerProjet(title, description)
    .then(() => {
      // Mise à jour de l'affichage des projets
      displayProjects();
    })
    .catch((error) => {
      console.error("Error creating project:", error);
    });
}

// Fonction pour afficher les projets
function displayProjects() {
  const projectsContainer = document.getElementById("projects-container");

  // Nettoyer les projets existants
  projectsContainer.innerHTML = "";

  // Récupérer le nombre total de projets
  projetContract.projetCount()
    .then((count) => {
      // Parcourir tous les projets
      for (let i = 1; i <= count; i++) {
        // Récupérer les informations du projet
        projetContract.projets(i)
          .then((project) => {
            // Créer un élément de carte pour le projet
            const card = document.createElement("div");
            card.classList.add("col");
            card.innerHTML = `
              <div class="card shadow-sm">
                <h2 class="projectTitle">${project.titre}</h2>
                <div class="card-body">
                  <p class="card-text">${project.description}</p>
                  <p class="card-text">Creator: ${project.createur}</p>
                  <p class="card-text">Total Amount: ${project.montantTotal}</p>
                </div>
              </div>
            `;

            // Ajouter la carte au conteneur des projets
            projectsContainer.appendChild(card);
          })
          .catch((error) => {
            console.error("Error retrieving project details:", error);
          });
      }
    })
    .catch((error) => {
      console.error("Error retrieving project count:", error);
    });
}

// Écouteur d'événement pour le bouton "Create"
document.getElementById("btnCreate").addEventListener("click", createProject);

// Afficher les projets au chargement de la page
displayProjects();
