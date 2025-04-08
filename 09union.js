var score = 1508;
score = "1800";
score = 2020;
var createUser = function (userId) { return ({
    userId: userId,
    isLoggedIn: true,
    contribution: 0
}); };
var makeAdmin = function (adminId) { return ({
    adminId: adminId,
    isLoggedIn: true,
    contribution: 0,
    inChargeOf: []
}); };
var a1 = makeAdmin("eFootball");
var u1 = createUser("Anik");
var u2 = createUser("Sandy");
a1.inChargeOf.push(u1.userId, u2.userId);
console.log("Admin :\n ".concat(JSON.stringify(a1)));
