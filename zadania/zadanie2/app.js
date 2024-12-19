let useres = [];

import { addUser } from "./userManager.js";
import { removeUser } from "./userManager.js";
import { findUser } from "./userManager.js";

addUser(useres , "Scar");
addUser(useres , "Roj");
addUser(useres , "Mixer");
addUser(useres , "Shin");
addUser(useres , "Berni");
addUser(useres ,"Zothar");
addUser(useres , "Kael");

console.log(useres)

removeUser(useres,5);
console.log(removeUser);

findUser(useres , 4);

