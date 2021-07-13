"SPDX-License-Identifier: UNLICENSED";

pragma solidity ^ 0.8.2;

contract Coursetro {
    
   string fName;
   uint age;
   address id;

   function setInstructor(string memory _fName, uint _age address _id) public {
       fName = _fName;
       age = _age;
	id=_id;
   }
   
   function getInstructor() public view returns (string  memory, uint, address) {
       return (fName, age, id);
   }
    
}