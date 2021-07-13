// Initialize web3 and set the provider to the testRPC.
if (typeof window.ethereum !== "undefined") {
  // Use Mist/MetaMask's provider
  web3 = new Web3(window.ethereum);
  alert("MetaMask detected");
} else {
  // set the provider you want from Web3.providers
  alert("Error: Please install MetaMask then refresh the page.");
  //web1= new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
  //return null;
}
try {
  //request account access
  window.ethereum.enable();
  //return true
} catch (e) {
  //user denied access
  //  return false;
}

//to get access to the accounts
web3.eth.getAccounts(function (error, accs) {
  if (error != null) {
    alert("there is an error in fetching the account");
    return;
  }

  accounts = accs[0];

  web3.eth.getBalance(accounts, function (err, balance) {
    var balance1 = web3.utils.fromWei(balance, "ether");
    console.log(balance1);
  });
});

var CoursetroContract = new web3.eth.Contract(
  [
    {
      inputs: [],
      name: "getInstructor",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_fName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_age",
          type: "uint256",
        },
      ],
      name: "setInstructor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  "0x6839b1B7a884b8e5d6a3b19e6eA768C2bc7Fbadb"
);

$("#update").click(function () {
  CoursetroContract.methods
    .setInstructor($("#name").val(), $("#age").val())
    .send({ from: accounts });
});
CoursetroContract.methods
  .getInstructor()
  .call()
  .then(function (result) {
    if (result) {
      $("#Instructor").html(result[0] + "(" + result[1] + " years old)");
      console.log(result);
    } else console.log(e);
  });
// 