const HDWalletProvider = require('truffle-hdwallet-provider');
const teamsMnemonic = "cherry cricket shrimp usage wing size course buddy scare two parrot lazy";


module.exports = {
 networks: {
  development: {
    provider: function() {
      return new HDWalletProvider(teamsMnemonic, "https://sandbox.truffleteams.com/751cae55-6b87-49b1-9d77-8b7b7cd928a3", 0, 10, false);
    },
    port: 443,
    network_id: "*"
  }
},
   compilers: {
    solc: {
      version: "0.4.25"
    }
  }
};
