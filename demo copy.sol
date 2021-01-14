pragma solidity ^0.4.0;

contract SimpleStorage {
uint storedData; // 声明一个类型为 uint (256位无符号整数）的状态变量，叫做 storedData

function set(uint x) public {
storedData = x; // 状态变量可以直接访问，不需要使用 this. 或者 self. 这样的前缀
}

function get() public view returns (uint) {
return storedData;
}
}