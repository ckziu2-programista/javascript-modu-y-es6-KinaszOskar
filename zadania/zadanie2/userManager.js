export function addUser(users, user){
    users.push(user);
}


export function removeUser(users, id){
    users.splice(id,1);
}

export function findUser(users, id){
    console.log(users[id]);
}

