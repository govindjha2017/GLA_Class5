var money = 50;
function outer(){
    money++;
    let a= 40;
    function inner(){
        money++;
        a++;
        console.log(money,a);
        function innermost(){
            console.log(money);
            var money = 10;
            console.log(a,money);
        }
        console.log("hello")
        innermost()
    }
    inner()
}
console.log("start");
outer();
console.log(a);
console.log("end");

