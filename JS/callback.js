function register(){
    // waitforthreeseconds();
    setTimeout(()=>
        {
            console.log("register end")
        },3000)
    // console.log("register End");
}
function login(){
    // waitforthreeseconds();
    setTimeout(()=>
    {
        console.log("Login end")
    },5000)
    // console.log("Register End");
}
function displaydata(){
    // waitforthreeseconds()
    setTimeout(()=>
        {
            console.log("Display end")
        },5000)
    // console.log("Display User data");
}
function waitforthreeseconds(){
    const ms=3000+new Date().getTime();
    while(ms> new Date){

    }
}
register();
login();
displaydata();