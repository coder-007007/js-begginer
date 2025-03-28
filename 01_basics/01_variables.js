const accountId = 144553
let accountEmail = "aditya@gmail.com"
var accountpasword = "12345"
accountCity = "kanpur"
let accountstate;

// accountId = 2 not allowed

accountEmail = "abc@abc.com"
accountpassword = "2222222"
accountCity = "bengaluru"

console.table([accountId, accountpasword, accountEmail, accountCity])


/*
prefer not to use var 
because of issue in  block scope and fumctional scope
*/
