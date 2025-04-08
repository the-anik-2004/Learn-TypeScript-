var user = {
    userId: 555,
    email: "user@gmail.com",
    isActive: true,
    startTrial: function () {
        return "Welcome to Our Platform";
    },
    getCoupon: function (code) { return "cupon-".concat(code); }
};
console.log(user.startTrial());
console.log(user.getCoupon("uweru345"));
var hod = {
    role: "system_admin",
    userId: 555,
    email: "user@gmail.com",
    isActive: true,
    startTrial: function () {
        return "Welcome to Our Platform";
    },
    getCoupon: function (code) { return "cupon-".concat(code); }
};
console.log(hod.role);
