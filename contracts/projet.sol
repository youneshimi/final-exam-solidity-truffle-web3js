// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

contract ProjetContract {
    struct Projet {
        uint256 id;
        string titre;
        string description;
        address createur;
        uint256 montantTotal;
        address[] donateursListe;
    }

    uint256 public projetCount;
    mapping(uint256 => Projet) public projets;
    mapping(uint256 => mapping(address => uint256)) public montantsDonateurs;

    event ProjetCree(uint256 id, string titre, address createur);
    event DonEffectue(uint256 id, address donateur, uint256 montant);

    function creerProjet(string memory _titre, string memory _description) public {
        projetCount++;
        projets[projetCount] = Projet(
            projetCount,
            _titre,
            _description,
            msg.sender,
            0,
            new address[](0)
        );

        emit ProjetCree(projetCount, _titre, msg.sender);
    }

    function soutenirProjet(uint256 _projetId) public payable {
        Projet storage projet = projets[_projetId];
        require(montantsDonateurs[_projetId][msg.sender] == 0, "Vous avez deja fait un don a ce projet");

        montantsDonateurs[_projetId][msg.sender] = msg.value;
        projet.donateursListe.push(msg.sender);
        projet.montantTotal += msg.value;

        emit DonEffectue(_projetId, msg.sender, msg.value);
    }

    function getProjetDonateurs(uint256 _projetId) public view returns (address[] memory) {
        Projet storage projet = projets[_projetId];
        return projet.donateursListe;
    }

    function getDonateurMontant(uint256 _projetId, address _donateur)
        public
        view
        returns (uint256)
    {
        return montantsDonateurs[_projetId][_donateur];
    }
}
