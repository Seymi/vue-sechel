//import {permission} from '@lib/permissions';
//let args = [];

class Permission {
    grants = [];
    setGrants ( params) {
        console.log( params)
        this.grants.push(...params);
        //args.push([ ...params]);
    };
    getGrants() {
        console.log('grants:', this.grants);
        return this.grants;
    };
    isAdmin() {
        return this.grants.indexOf('admin') !== -1;
    };
}

function echoArg() {
    alleArgumente = [];
    console.log('there is smoke in echoArg');
    console.log(arguments.length);
    alleArgumente.push( ...arguments)

    console.log('args:', alleArgumente);
}

// function setGrants(roles) {
//     Permission.setGrants( ... roles);
// }

function test() {
    myUserPermission = new Permission();
    console.log('there is smoke in test');
    myUserPermission.setGrants(["user", "admin"]);
    myUserPermission.getGrants();
    console.log(myUserPermission.isAdmin());

    // console.log(args[0]);
    // console.log(JSON.stringify(args[0]));
    // console.log(JSON.stringify[myUserPermission, 'admin']);
    // return JSON.stringify(args[1]) //=== JSON.stringify([user, 'admin']);
}

console.log(test());
echoArg( 3, 6, 8 );
