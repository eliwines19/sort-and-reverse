
// sorting

var letters = "gfedcba";

// sort string with .sort()
// var sortString = (string) => {
//     return string.split("").sort().join("")
// }


// sort string using for loop
// var sortString = (string) => {
//     var arr = string.split("");
//     var temp;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             };
//         };
//     };
//     return arr.join("");
// }

// console.log(sortString(letters))

// reversing

var word = "hello"

// reverse string with .reverse()
// var reverseString = (string) => {
//     return string.split("").reverse().join("")
// }

// var reverseString = (string) => {
//     var reversed = "";
//     for (var i = string.length - 1; i >= 0; i--) {
//         reversed += string[i]
//     }
//     return reversed
// }

// reverse string with recursion
var reverseString = (string) => {
    if (string === "") {
        return "";
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}

console.log(reverseString(word))