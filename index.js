let List1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
let List2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

let NewList1 = [];
let NewList2 = [];
let CommonList = [];

List1.forEach((each, index) => {
  if (List2.includes(each)) {
    CommonList.push(each);
  } else {
    NewList1.push(each);
  }
  if (!List1.includes(List2[index])) {
    NewList2.push(List2[index]);
  }
});

console.log(NewList1);
console.log(NewList2);
console.log(CommonList);
