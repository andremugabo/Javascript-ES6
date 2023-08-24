// Object destructuring
const myObjects = {
  firstName: "Chris",
  lastName: "Jones",
  age: 16,
  height: "6ft",
};
// console.log(myObjects["firstName"]);
// console.log(myObjects.firstName);
// console.log("########################");
// const firstName1 = myObjects.firstName;
// const lastName1 = myObjects.lastName;
// const age = myObjects.age;

// console.log(firstName1, lastName1, age);

// let { firstName, lastName, age1, height } = myObjects;

// console.log(firstName1, lastName1, age1, height);

console.log("#################################");
let myVAr1, myVar2;
const myobj2 = { myVAr1: "a", myVar2: "b" };
console.log(myVAr1, myVar2);
({ myVAr1, myVar2 } = myobj2);
console.log(myVAr1, myVar2);

// Assigning new variable names
const myObj3 = { q: "cool", w: "oh yeah", e: "nice :D", r: "awesome !" };
const { q, w, e, r } = myObj3;

console.log(e);
const { q: cool, w: yeah, e: nice, r: awesome } = myObj3;
console.log(cool);
const myObj4 = { uuid: 134356, userName: "es6rulez", loggedIn: new Date() };
const { uuid: userID, userName: name, loggedIn: lastLoginDate } = myObj4;
console.log(userID);
console.log("#####");
console.log(name);
console.log("#####");
console.log(lastLoginDate.toLocaleString());
console.log("############################");
// objects can have default values
const myObj5 = { a1: 10, b1: 20, c1: 30, d1: 40 };
// const { a1, b1, c1, d1, e1 } = myObj5;
//console.log(e1);  undefined
//let's give e1 a default value
const { a1, b1, c1, d1, e1 = 50 } = myObj5;
console.log(e1);

function stateUser({ user = "Bob", memberType }) {
  console.log(`userName:${user},  memberType:${memberType}`);
}
stateUser({ user: "steve", memberType: "premium" });

function stateUser2(obj) {
  const { user = null, memberType } = obj;
  if (!user) {
    console.log("Error No user name entered");
    return;
  } else {
    console.log(`Username: ${user}, memberShip type :${memberType}`);
  }
}

const member1 = { user: "Steve", memberType: "premium" };
const member2 = { memberType: "free" };

stateUser2({ memberType: "premium" });
console.log("############");
stateUser(member2);
stateUser2(member1);
stateUser2(member2);

function sayIfValid({ prop: s, a1111: q }) {
  console.log(s, q);
}

const myObj6 = {
  prop: "I am valid",
  proop: "I am not valid",
  a1111: "I am also not valid",
};
sayIfValid({ prop: "I am valid" });
// sayIfValid({ proop: "I am not valid" }); undefined

sayIfValid(myObj6);

console.log("###############");

function sayIfValid2({ prop, a1111 }) {
  const internalObj = {
    prop: prop,
    a1111: a1111,
    constructed: true,
  };
  return internalObj;
}

console.log(sayIfValid2(myObj6));

console.log("####################");

function sayIfValid3({ prop, a1111 }) {
  const internalObj = {
    prop,
    a1111,
    constructed: true,
  };
  return internalObj;
}

console.log(sayIfValid3(myObj6));

//  nested objects

const myObj7 = {
  title: " My Address Book",
  entries: [
    {
      name: "BOb",
      number: "555-5555",
      address: "123 fake st",
    },
  ],
  myPhone: "555-1111",
};

// const {
//   title,
//   entries: [{ address }],
// } = myObj7;
// console.log(title, entries);
// console.log(title, address);
const myObj8 = {
  myProp1: "Ahhhh!",
  myProp2: [20, 50],
};
// Destructuring
const {
  myProp1,
  // myProp2: [xx, yy],
  myProp2: [, yy],
} = myObj8;

// console.log(xx, yy);
console.log(yy);

// address book example

const myObj9 = {
  title: " My Address Book",
  entries: [
    {
      name: "Bob",
      number: "555-5555",
      address: "123 fake st",
      other: {
        cell: "555-0987",
        email: "bob@bob.bob",
      },
    },
    {
      name: "Jill",
      number: "555-1234",
      address: "155 fake st",
      other: {
        cell: "555-01234",
        email: "jill@jill.jill",
      },
    },
    {
      name: "Billy",
      number: "555-8888",
      address: "555 fake st",
      other: {
        cell: "555-34256",
        email: "billy@billy.com",
      },
    },
  ],
  myPhone: "555-1111",
};

const {
  title,
  // entries: [{ name: nnn, address }],
  entries,
} = myObj9;
// console.log(nnn);
// Now we want to loop through

console.log(entries);

// Now loop through by using FOR OF LOOP thats how we loop through an array

for (const {
  name,
  address,
  other: { cell, email },
} of entries) {
  console.log(
    `name : ${name}, address :${address}, cell:${cell}, email: ${email} `
  );
}
