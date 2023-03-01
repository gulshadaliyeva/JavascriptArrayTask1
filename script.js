"use strict"
/*let numbers = [1, 2, 3, 5, 10, 7, 27, 1540, 75, 25, 44, 125, 854, 800, 9]
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum += numbers[i]
}
console.log(sum);
console.log(sum / numbers.length);
*/
/*let price = 5

if (price == 5) {
    document.write("ela")
}
    else if(price == 4){
        document.write("yaxshi")
}
    else if(price == 3){
        document.write("kafi")
}
    else if(price == 2){
        document.write("qeyri-kafi")
}
  else{
    document.write("qiymet duzgun  qeyd edilmemishdir")
  }
*/

/*for (let i = 1; i<=5; i++) {
 for (let j = 1; j<=i ; j++) {
    document.write(j)
 }
 document.write("<br>")
}
*/




// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach(element=> {
//     console.log(element)
// });
// console.log(numbers.slice(5,10));
// console.log(numbers.slice(0,5));

// numbers.forEach(element => {
//     if (element % 2 === 0) {
//         console.log('cüt ədədlər:' + element);
//     }
// });
// numbers.forEach(element => {
//     if (element % 2 === 1) {
//         console.log('tək ədədlər:' + element);
//     }
// });



// let numbers = [12, 52, 32, 14, 85, 16, 37, 98, 99, 101]
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// numbers.sort((a, b) => b - a);
// console.log(numbers);


// let students = [
//     {fName: "Elmar", qiymet: "5"},
//     {fName: "Gülşad", qiymet: "5"},
//     {fName: "Adil", qiymet: "4"},
//     {fName: "Kamran", qiymet: "2"},
//     {fName: "Elmar Aton", qiymet: "2"},
//     {fName: "Ruqiyyə xala", qiymet: "5"},
//     {fName: "Nəriman", qiymet: "2"},
//     {fName: "Tofiq", qiymet: "2"},
//     {fName: "Gülşad Nənön", qiymet: "3"},
//     {fName: "Sevinc", qiymet: "5"},
//     {fName: "Gülxanım Nənön", qiymet: "4"},
//     {fName: "Nəzrin", qiymet: "5"},
// ]
// students.forEach(element => {
//     console.log(element);
// });
// students.forEach(element => {
//     if (element.qiymet == 2 && element.qiymet == 3) {
//         console.log(`ad: ${element.fName} qiymet ${element.qiymet} netice:pis`);
//     }
//     else if (element.qiymet == 4){
//         console.log(`ad: ${element.fName} qiymet ${element.qiymet} netice:yaxşı`);
//     }
//     else{
//         console.log(`ad: ${element.fName} qiymet ${element.qiymet} netice:Əla`);
//     }
// });

// let products = [
//     {id: 1, pName: "Kitab", category: "K"},
//     {id: 2, pName: "Kitab1", category: "K"},
//     {id: 3, pName: "Kitab2", category: "K"},
//     {id: 4, pName: "Kitab3", category: "K"},
//     {id: 5, pName: "Dəftər", category: "D"},
//     {id: 6, pName: "Dəftər1", category: "D"},
//     {id: 7, pName: "Dəftər2", category: "D"}
// ]
// let productsFilteredByCategoryK = products.filter(product => product.category === 'K');
// console.log(productsFilteredByCategoryK);
// let productsFilteredByCategoryD = products.filter(product => product.category === 'D');
// console.log(productsFilteredByCategoryD);
// let product = products.filter(product => product.id === 5)[0];
// console.log(product);

// let newproducts =  products.filter(function(product) {
//     return product.category == "K";
// });
// console.log(newproducts);









// string
// console.log('salam necesen'.toUpperCase());
// console.log('Salam Necesen'.toLowerCase());

// console.log('salam necesen'.includes('salam'));
// console.log('bu gun hava necedi'.startsWith('bu'));
// console.log('bu gun hava necedi'.endsWith('necedi'));
// console.log('azerbaycan'.slice(0 , 10))

// let text = "salam necesiz"
// console.log(text.replace("necesiz" , "yaxshiyam"));

// let text = "salam necesiz"
// let text2 = "bu gun hava cox yaxshidi"
// console.log(text.concat(" " , text2));

// let text = "       yaxshiyam salam necesiz      "
// console.log(text.trim());
// let text = "tatam";
// console.log(text.charAt(3));

// let text = "salam, bu gun necesen ";
// console.log(text.split(","));

// let text = "salam, bu gun necesen ";
// console.log(text.split(","));

// for

let div = document.querySelectorAll("div")
let btn = document.querySelector("button")

btn.onclick = function () {
    // for (let index = 0; index < div.length; index++) {
    //     div[index].remove()
    // }
    // for (let i of div) {
    //    i.remove()
    // }

    // for (let i  in div) {
    //     console.log(i);
    // }
}