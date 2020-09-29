const HDWalletProvider = require('truffle-hdwallet-provider');
const teamsMnemonic = "panther model borrow attitude hat between expand garbage rough month adjust truck";


module.exports = {
 networks: {
  development: {
    provider: function() {
      return new HDWalletProvider(teamsMnemonic, "https://sandbox.truffleteams.com/941380bb-b36d-404d-9fc3-2b543ada078c", 0, 10, false);
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
