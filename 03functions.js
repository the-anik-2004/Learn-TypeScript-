function addTwo(num) {
    return num + "hello";
}
console.log(addTwo(12));
function signUpUser(username, email, isLoggedIn) {
    console.log("username : ".concat(username, "\n"));
    console.log("email : ".concat(email, "\n"));
    console.log("isLoggedIn : ".concat(isLoggedIn, "\n"));
}
signUpUser("anikpal_", "anik@ap.com", false);
function loggingInUser(username, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    console.log("username : ".concat(username, "\n"));
    console.log("email : ".concat(email, "\n"));
    console.log("isLoggedIn : ".concat(isPaid, "\n"));
}
loggingInUser("anikpal_", "anik@ap.com");
