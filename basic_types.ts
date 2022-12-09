// numbers
let var_number: number;
var_number = 123;
var_number = 1.2;
var_number = 0xFA;

console.log(var_number);

// booleano
let active: boolean = true;
active = false;


// string
let first_name: string = 'Bruno';
let last_name: string = 'Pautz';
let full_name: string = `${first_name} ${last_name}`

console.log(full_name);

// Enums - types bem definidos
enum ROLES {
    MANAGER = 'manager', 
    ADMIN = 'admin', 
    CEO = 'ceo', 
    CTO = 'cto'
};


function setRole(role: ROLES): void {

}

setRole(ROLES.CEO);

console.log(ROLES.CTO);

// arrays
let diverso = ['Bruno', 'Winckieel', true, 1];
let names: string[] = ['Bruno', 'Joao'];
let msmNames: Array<string> = ['Bruno', 'teste'];
let diversosArray: Array<any> = ['Bruno', 1212, true , 5.6];
