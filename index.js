var f2 = function () {
    console.log("i am function 2");
};
var f1 = function () {
    console.log("i am calling the function 2 from 1");
    f2();
};
f1();