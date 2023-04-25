// ####### Using the model after creating it by own
/*var lt = require('./new_module')

let a = 10
let b = 23

console.log(lt.add(a,b))
console.log(lt.sub(a,b))*/


// working with the files without using libraries

var fs = require('fs')
// FOR READING A FILE
// file_name , encrypting_type,dealing_with_data_and_errors
fs.readFile('new_module.js','utf-8',function(err,data){
    // console.log(data)
})

// FOR WRITING A FILE
// file_name if not create file ,content_that_want_to_write,dealing_with_data_and_errors
fs.writeFile('create.js','console.log("writing in a file")',function(err){
    // console.log("modification in file is completed")
})

/*
writeFile --> erase all the previous data and then write
appendFile --> write or add the data in existing file without deleting the previous data
*/
fs.appendFile('create.js','console.log("This is new line")',function(err){
    // console.log("modification are done")
})

// unlink is use to delete the file 
fs.unlink('create.js',function(err){
    // console.log("file is deleted")
})
