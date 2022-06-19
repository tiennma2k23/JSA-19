alert("Bai 1");
let num = Number(prompt("Nhap n:"));
function findEven(n) {
  for (let index = 0; index <= n; index++)
    if (index % 2 == 0) console.log(index);
}
findEven(num);

// let bai3 = document.getElementsByClassName("bai3");
alert("Bai 3");
let n = Number(prompt("Nhap n:"));
function numberOneTriangle(n) {
  for (let index = 1; index <= n; index++) {
    for (let i = 0; i < index; i++) {
      document.write("1");
    }
    document.write("<br>");
  }
}
numberOneTriangle(n);
