const HDWalletProvider = require('truffle-hdwallet-provider');
const teamsMnemonic = "unaware fine quiz stock level photo vital arrow usage replace impose boss";


module.exports = {
 networks: {
  development: {
    provider: function() {
      return new HDWalletProvider(teamsMnemonic, "https://sandbox.truffleteams.com/69a8e39c-caaf-4f4d-9c1e-15f91de9c3a7", 0, 10, false);
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
