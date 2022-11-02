
var letters = "gfedcba";


// sort string with .sort()
// var sortString = (string) => {
//     return string.split("").sort().join("")
// }

var sortString = (string) => {
    var arr = string.split("");
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join("")
}

console.log(sortString(letters))