// // let str = prompt("Enter a string");

// // let obj = {};

// // for (i = 0; i < str.length; i++ ) {
// //     if (obj[str[i]]) {
// //         obj[str[i]] += 1;
// //     } else {
// //         obj[str[i]] = 1;
// //     }
// // }
// // console.log(obj);

// let str = "Andrew is a boss, and is waiting for his 3d printer";

// changeLetter(str);


// function changeLetter(str) {
//     let newstr = str.split("")
//    for (i = 0; i < str.length; i++) {
//         if (newstr[i] == "s") {
//             newstr[i] = 0;
//         } else if (newstr[i] ==  "a" || newstr[i] == "A") {
//             newstr[i] = "";
//         } else if (newstr == ",") {
//             newstr[i] = "";
//         }

//     }  
// console.log(str);
// console.log(newstr.join(""));
// }

let foo = 'Hello there my name is error';
console.log(foo.split(""))
console.log(splitt(foo, ''));

function splitt(str, splitter){
    let return_arr = []
    let new_str = ''
    for (i = 0; i < str.length; i++) {
        return_arr.push(str[i]);
       
    }
    return return_arr;
}