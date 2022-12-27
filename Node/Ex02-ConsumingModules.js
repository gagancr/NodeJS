const myModule=require("./customModules"); // importing the module
const aliasFunc=myModule.simpleFunc;
aliasFunc();  // call using alias function
myModule.simpleFunc(); // can call directly


const table=myModule.mathTable;

table(2);
myModule.mathTable(5);
table();


