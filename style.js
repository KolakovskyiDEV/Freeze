'use strict'


let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

function freaze(obj) {
    Object.freeze(obj);
    for (let key in obj) {
        console.log(key, obj[key])
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Object.freeze(obj[key]);
            freaze(obj[key]);
        }      
    }
}

freaze(user);

// user.data.d.d1.a2 = 222;
delete user.data.d.d1.a2;
console.log(user.data.d.d1.a2);




