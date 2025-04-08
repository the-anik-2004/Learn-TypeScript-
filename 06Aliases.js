var validateUser = function (user) {
    if (user.name.length >= 2 && user.isActive)
        return true;
    return false;
};
var newUser = {
    name: "Anik",
    email: "anik@ap.com",
    mobile: 1234567890,
    isActive: true,
    readme: false,
    address: "Madrid"
};
console.log(validateUser(newUser) + "\n USER:\n", newUser);
