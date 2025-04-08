document.body.innerHTML += `<h2 style="color:white; text-align: center;">Welcome to Typescript</h2>`;
// class User{
//     readonly id:number=Math.random();
//     username:string;
//     email:string;
//     city:string;
//     role:Role;
//     constructor (username:string,email:string,city:string,role:Role=Role.CLIENT){
//         this.username=username;
//         this.email=email;
//         this.city=city;
//         this.role=role;
//     }
// }
// const user1=new User("AdminUser", "admin@example.com", "Mumbai", Role.ADMIN);
// const user2 = new User("Anik", "anik@example.com", "Kolkata");
// console.log(user2); 
// document.body.innerHTML +=`<h4 style="color:orange; text-align: center;">user1:\n${JSON.stringify(user1)}</h4>`
// document.body.innerHTML +=`<h4 style="color:orange; text-align: center;">user2:\n${JSON.stringify(user2)}</h4>`
class User {
    constructor(username, email, city, role = "client" /* Role.CLIENT */) {
        this.username = username;
        this.email = email;
        this.city = city;
        this.role = role;
        this.id = Math.random();
        // private coin:number=0;
        this.coin = 0;
    }
    //getters
    get coins() {
        return this.coin;
    }
    //setters
    set coins(addedCoins) { this.coin += addedCoins; }
}
class User2025 extends User {
    set removeCoins(removedCoins) {
        let temp = this.coin;
        temp = temp - removedCoins;
        if (temp < 0) {
            throw new Error("Insufficient Balance");
        }
        else {
            this.coin = temp;
        }
    }
}
// const publicUser=new User("Anik Pal","anikpal12082004@gmail.com","Goas",Role.CLIENT)
// publicUser.coins=100;
// publicUser.removeCoins=10;
const publicUser = new User2025("Anik Pal", "anikpal12082004@gmail.com", "Goas", "client" /* Role.CLIENT */);
publicUser.coins = 1505;
publicUser.removeCoins = 1500;
document.body.innerHTML += `<h4 style="color:orange; text-align: center;">user2:\n${JSON.stringify(publicUser)}</h4>`;
document.body.innerHTML += `<h4 style="color:blue; text-align: center;">
    Available Coins:<span style="color:yellow;" > ${publicUser.coins}</span> 🪙
</h4>`;
export { User };
