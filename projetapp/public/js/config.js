// Configuration de l'adresse du contrat intelligent et de l'ABI
var contractAddress = "YOUR_CONTRACT_ADDRESS";
var ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "getProjects",
        "outputs": [
            {
                "name": "",
                "type": "Project[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "getProject",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_title",
                "type": "string"
            },
            {
                "name": "_description",
                "type": "string"
            }
        ],
        "name": "createProject",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "donateToProject",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "getDonors",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

// Initialisation du contrat intelligent
var contract = new web3.eth.Contract(ABI, contractAddress);
