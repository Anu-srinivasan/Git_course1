"SPDX-License-Identifier: UNLICENSED";

pragma solidity ^ 0.8.2;

contract Coursetro {
    
   string fName;
   uint age;
   
   function setInstructor(string memory _fName, uint _age) public {
       fName = _fName;
       age = _age;
   }
   
   function getInstructor() public view returns (string  memory, uint) {
       return (fName, age);
   }
    
}