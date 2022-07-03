// API - application program interface : Một cách để client tương tác với server

// Server-Database: Nó là nơi lưu trữ dữ liệu và cung cấp API cho client gọi tới

//Client: Gọi API

//Method: phương thức mặc định ủa fetch là GET

// fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/products")
//   .then((response) => {
//     response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/products")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

//Bai 1
console.log("Bai 1");
let student = (name, age, address) => {
  var person = {
    name: name,
    age: age,
    address: address,
  };
  return person;
};
console.log(student("NMT", 18, "VP"));
//Bai 2
console.log("Bai 2");
var smartPhones = [
  { name: "iphone", price: 649 },
  { name: "Galaxy S6", price: 576 },
  { name: "Galaxy Note 5", price: 489 },
];
let product = String(prompt("Nhap ten san pham"));
let price = (name_products) => {
  for (let index = 0; index < smartPhones.length; index++) {
    if (smartPhones[index].name == name_products)
      return smartPhones[index].price;
  }
  return 0;
};
console.log(price(product));
//Bai 3;
console.log("Bai 3");
let foo = (x, y, z) => console.log(x, y, z);
foo(1, 2, 3);

foo = () => console.log("Hello");
foo();

foo = (a, b) => {
  let m = a + b * 100;
  return m;
};
console.log(foo(1, 2));

//Buoi 4
console.log("Bai1_B4");
let num = Number(prompt("Nhap n (Bai 1-buoi 4):"));
let findEven = (n) => {
  for (let index = 0; index <= n; index++)
    if (index % 2 == 0) console.log(index);
};
findEven(num);

console.log("Bai3_B4");
let n = Number(prompt("Nhap n (Bai3 - buoi 4):"));
let numberOneTriangle = (n) => {
  for (let index = 1; index <= n; index++) {
    for (let i = 0; i < index; i++) {
      document.write("1");
    }
    document.write("<br>");
  }
};
numberOneTriangle(n);
