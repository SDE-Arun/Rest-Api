// var aPromise = new Promise(function(resolve, reject) {
//     request.get(options, function(err, resp, body) {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(JSON.parse(body));
//         }
//     })
// });

// var prm = new Promise(function(resolve, reject){
//     return prm
// }) 

// var pr = (txt) => new Promise(function(resolve,reject){

// });

var pr = function(txt){
    return new Promise(function(resolve,reject){
        setTimeout(() => {resolve(txt)}, 5000);
    })
}
let lst = [22,'hg',55]
let p = pr(lst)
p.then((t)=> console.log(t))
// console.log(p)