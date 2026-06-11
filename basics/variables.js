const account_id = 12345
let accountEmail = "test@gmail.com"
var accountpassword = "4231"
accountCity = "yamunanagar"

// account_id = 2
console.log(account_id)
accountEmail = "testnew@gmail.com"
accountpassword = "4231785"
accountCity = "yamunanagarnew"
let accountstate;
// here accountstate is declared, but not defined that's why it shows undefined in console
// prefer to use let over var because of block space issue 

console.table([account_id, accountEmail, accountpassword, accountCity, accountstate])

