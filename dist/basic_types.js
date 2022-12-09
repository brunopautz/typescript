"use strict";
// numbers
let var_number;
var_number = 123;
var_number = 1.2;
var_number = 0xFA;
console.log(var_number);
// booleano
let active = true;
active = false;
// string
let first_name = 'Bruno';
let last_name = 'Pautz';
let full_name = `${first_name} ${last_name}`;
console.log(full_name);
// Enums - types bem definidos
var ROLES;
(function (ROLES) {
    ROLES["MANAGER"] = "manager";
    ROLES["ADMIN"] = "admin";
    ROLES["CEO"] = "ceo";
    ROLES["CTO"] = "cto";
})(ROLES || (ROLES = {}));
;
function setRole(role) {
}
setRole(ROLES.CEO);
console.log(ROLES.CTO);
