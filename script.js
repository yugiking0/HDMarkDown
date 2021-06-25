'use strict';

//STEP01 Loop For
/*
 **
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 *
 */
//LEARN

/* function isPrimeNumber(x) {
  let nguyenTo = true;
  if (x == 1) nguyenTo = false;
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      nguyenTo = false;
      break;
    }
  }
  return nguyenTo;
} */
// console.log(isPrimeNumber(2)); @param
// console.log(isPrimeNumber(3));
// console.log(isPrimeNumber(4));
// console.log(isPrimeNumber(6));
// console.log(isPrimeNumber(7));
// console.log(isPrimeNumber(8));
// console.log(isPrimeNumber(431));
// console.log(isPrimeNumber(81));

/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a"
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

/* function fromCharCode() {
  let string = '';
  for (let i = 97; i <= 122; i++) {
    string = string + String.fromCharCode(i);
  }
  return string;
} */

// console.log(fromCharCode());

/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

/* function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
} */
// console.log(sum([1, 2, 3]));

// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
/* function sumMultiplyArray(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < b.length; y++) {
      sum += a[i] * b[y];
    }
  }
  return sum;
} */
// console.log(sumMultiplyArray([1, 2, 3], [10, 20])); //180

/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
/* function calculate(start, end) {
  let cal = 1;
  for (let i = start; i < end; i++) {
    cal *= i;
  }
  return cal;
} */
// console.log(calculate(2, 5));

/* /**
 *  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
 *  Tham số:
 *- array: mảng cần kiểm tra
 *- value: giá trị cần kiểm tra xem có tồn tại trong array không
 * Return:
 *- true nếu có tồn tại
 *- false nếu không tồn tại
 */
/* 
function has(array, value) {
  let isInclude = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      isInclude = true;
      break;
    }
  }
  return isInclude;
} */

// console.log(has([2, 3, 4, '5', 6, '7'], 7));

//Tính giai thừa của một số nguyên
/* function factorials(number) {
  let pow = 1;
  let str = '';
  for (let i = 1; i <= number; i++) {
    str = str == '' ? i : str + '*' + i;
    pow *= i;
  }
  console.log(str + '=' + pow);
  return pow;
}
 */
// console.log(factorials(5));
//NOTE Disable prettire
// prettier-ignore

/* var valueX = "Giá trị X"; //Không bị chuyển về single quotation
//prettier
var valueY = 'Giá trị Y'; //Bị prettier format về single quotation

//STEPS Loop For..Of and For..in
let nhanVien = {
  firstName: 'John',
  lastName: 'Smith',
  age: 32,
  birthYear: 1988,
  fiends: ['Marry', 'Tom', 'Jack'],
};

const employees = [
  { name: 'Long', age: 25 },
  { name: 'Minh', age: 28 },
  { name: 'Thomas', age: 38 },
]; */
// console.log('==========For Loop============');
//WARNING Vòng lặp chuẩn
/* for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name, employees[i].age);
} */

//STEP01 Loop For..Of: Items of Array use Array
// console.log('==========For..Of============');
/* for (var person of employees) {
  console.log(person.name, person.age);
} */

//EXample Trong thực tế
/* let zEmployees = [
  { name: 'Long', age: 25 },
  { name: 'Minh', age: 28 },
  { name: 'Thomas', age: 38 },
];

let zContent = '';
for (var employee of zEmployees) {
  zContent += '<li>' + employee.name + '</li>';
}
document.getElementById('contact-id').innerHTML = zContent; */

//STEP02 Loop For..in use Object
/* let myDog = {
  name: 'Su Su',
  age: 2,
  weight: 5,
  kind: 'Black',
}; */
//myDog.name or myDog["kind"]
/* console.log('==========For..in============');
for (var key in myDog) {
  //myDog.key //undefined
  console.log(key, myDog[key]);
} */

/* for (var key in zEmployees) {
  //key.name //undefined
  console.log(key, key[]);
}
 */
/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */
/* let Friends = ['Long', 'Minh', 'Thomas'];

let arrayFriends = [
  { name: 'Long', age: 25 },
  { name: 'Minh', age: 28 },
  { name: 'Thomas', age: 38 },
];
let objFriend = {
  name: 'Long',
  age: 25,
}; */

//1. Đối tượng sử dụng.
//a. For..of dùng cho Array
/* console.log('====For..of dùng cho Array===');
for (let friend of Friends) {
  console.log(friend);
}
for (let friend of arrayFriends) {
  console.log(friend, friend.name);
}
//b. For..in dùng cho Object
console.log('====For..in dùng cho Object===');
for (let friend in objFriend) {
  console.log(friend, objFriend[friend]);
} */
//REDO
//2. cách xử lý
//- For..of nếu dùng cho Object thì sẽ báo lỗi: objFriend is not iterable: For..of không lấy được các phần tử của đối tượng không là iterable
/*
for(let friend of objFriend)
{
  console.log(friend);
}
*/
//- For..in nếu áp dụng cho Array thì chỉ lấy được index của mảng.
/*
for(let friend in Friends)
{
  console.log(friend);
}
*/

/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau,
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */
/*
//LEARN
var apartment1 = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100,
    },
  },
  livingrom: {
    area: 10,
    table: {
      type: 'long-chair',
      price: 12,
    },
    televison: {
      type: 'Sony',
      price: 4000,
      kind: {
        log: 'SN200',
        model: 2020,
      },
    },
  },
};

// NOTE Recursive Function in JavaScript
//Cách 1: BAD Chuối BAD
function getObjectKey(obj, keys) {
  let a = [];
  for (let i in obj) {
    a.push(i);
    for (let y in obj[i]) {
      a.push(y);
      for (let z in obj[i][y]) {
        a.push(z);
      }
    }
  }
  return a;
}
 
// console.log(getObjectKey(apartment, []));
// console.log(apartment[0]);

//Cách 2: ReDoIT Tạm cần làm lại
var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100,
    },
  },
  livingrom: {
    area: 10,
    table: {
      type: 'long-chair',
      price: 12,
    },
    televison: {
      type: 'Sony',
      price: 4000,
      kind: {
        log: 'SN200',
        model: 2020,
      },
    },
  },
};

function getObjectKey2(obj, keys) {
  for (let key in obj) {
    keys.push(key);
    console.log(Object.getOwnPropertyNames(obj).length);
    let a = Object.getOwnPropertyNames(obj).length;
    while (a > 0) {
      console.log(obj[key]);
      a--;
    }
  }
  return keys;
}

// getObjectKey2(apartment, []);
// console.log(getObjectKey2(apartment, []));
//NOTE Cần làm lại
// / Hàm đệ quy
function getObjectKey3(obj, keys) {
  for (let key in obj) {
    keys.push(key);
    console.log('Check length', Object.keys(obj).length);
    if (Object.keys(obj).length > 0) {
      console.log('====true====');
      console.log(obj[key]);
      getObjectKey3(obj[key], keys);
    } else {
      console.log('====fail====');
      // let val = obj[key];
      //getObjectKey3(val, keys);
    }
  }
  return keys;
}

console.log(getObjectKey3(apartment, []));
*/

/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */
/* 
function has(object, key) {
  let ihave = false;
  for (let i in object) {
    // console.log(i);
    if (i == key) {
      // console.log('yes');
      ihave = true;
    }
  }
  return ihave;
}

console.log(has({ name: 'Tom', age: 21 }, 'name'));
 */

/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu:
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */

/* function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sum([]));
console.log(sum([1, 2, 3]));
 */

/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
/* function removeEnd(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr.length >= 1) arr.pop();
  }
  return arr;
}
console.log(removeEnd([1, 2, 3, 4], 1)); */

/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
//NOTE các method hay sử dụng
/*
- 



*/

//CONTENT Array.prototype[@@iterator]()
/* var arr = ['a', 'b', 2, 3, 'c', 'd', 'e'];
var eArr1 = arr[Symbol.iterator]();
// console.log(eArr1); // Show Array Iterator {}
for (let letter of eArr1) {
  // console.log(letter);
} */

/**
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 */

/* function first(arr, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(first([1, 2, 3], 2)); // expect [1, 2] */

//CONTENT get Array[@@species]
// let eArr2 = arr[Symbol.iterator]();
/*
- array.slice
- array.splice
- find
- filter
- sort
- map
- reduce
*/

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback.
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó,
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

/* function transform(numbers, callback) {
  let result = [];
  for (let i in numbers) {
    result.push(callback(numbers[i]));
  }
  return result;
}

function double(num) {
  return 2 * num;
}
console.log(transform([21, 11, 5], double)); */

/* const oldArr = [1, 4, 9, 16];

// pass a function to map
const newArr = oldArr.map((x) => x * 2);

console.log(newArr);
// expected output: Array [2, 8, 18, 32]
 */

/* let map = Array.prototype.map
let a = map.call('Hello World', function (x) {
  return x.charCodeAt(0);
});
let b = map.call('Hello World', (x) => x.charCodeAt(0));
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
console.log(a);
console.log(b);
 */

/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers,
 * sử dụng map method và hàm tripple để trả về 1 mảng
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

/* function tripple(num) {
  return 3*num;
}

function multiply(numbers) {
  return numbers.map((x) => tripple(x));
}
console.log(multiply([1, 2, 3])); */

// Use array map make an array of strings of the names

/* var users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]

function namesOnly(arr) {
  return arr.map(function (item) {
    return item.name;
  });
}

// function namesOnly(arr) {
//  return arr.map(item => item.name );
// }

console.log(namesOnly(users)); */

// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

/* const users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
    
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
    
  }
]

function readyToPutInTheDOM(arr) {
  return arr.map(function (item) {
    item.name = '<h1>' + item.name + '<h1>';
    item.age = '<h2>' + item.age + '<h2>';
    return item;
  });
}

function readyToPutInTheDOM2(arr) {
  return arr.map(function (item) {
    return {
      name: '<h1>' + item.name + '<h1>',
      age: '<h2>' + item.age + '<h2>',
    };
  });
}
console.log(readyToPutInTheDOM2(users));

function readyToPutInTheDOM3(arrs) {
  return arrs.map((arr) => ({
    name: '<h1>' + arr.name + '<h1>',
    age: '<h2>' + arr.age + '<h2>',
  }));
}
console.log(readyToPutInTheDOM3(users));

let readyToPutInTheDOM4 = function (arrs) {
  return arrs.map((arr) => ({
    name: '<h1>' + arr.name + '<h1>',
    age: '<h2>' + arr.age + '<h2>',
  }));
};

console.log(readyToPutInTheDOM4(users));
 */

// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

/* const users = [
  {
    name: 'Angelina Jolie',
    age: 80,
  },
  {
    name: 'Eric Jones',
    age: 2,
  },
  {
    name: 'Paris Hilton',
    age: 5,
  },
  {
    name: 'Kayne West',
    age: 16,
  },
  {
    name: 'Bob Ziroll',
    age: 100,
  },
];
//Cách 1
console.log('===Cách 1===========');
//Thay đổi Array do gán lại array
function readyToPutInTheDOM(arr) {
  return arr.map(function (item) {
    let newItem = {};
    newItem.name = '<h1>' + item.name + '<h1>';
    newItem.age = '<h2>' + item.age + '<h2>';
    return newItem;
  });
}

console.log(readyToPutInTheDOM(users));

//Cách 2
console.log('===Cách 2===========');
function readyToPutInTheDOM2(arrs) {
  //Item of Arrs, Item of Items Array
  return arrs.map(function (item) {
    return {
      name: '<h1>' + item.name + '<h1>',
      age: '<h2>' + item.age + '<h2>',
    };
  });
}
console.log(readyToPutInTheDOM2(users));

//Cách 3
console.log('===Cách 3===========');
function readyToPutInTheDOM3(arr) {
  return arr.map((item) => ({
    name: '<h1>' + item.name + '<h1>',
    age: '<h2>' + item.age + '<h2>',
  }));
}
console.log(readyToPutInTheDOM3(users));

//Cách 4
console.log('===Cách 4===========');
//Giống cách 1 nhưng làm thay đổi mảng cũ.
//Thay đổi Array do gán lại array
function readyToPutInTheDOM4(arr) {
  //Array include item
  return arr.map(function (item) {
    item.name = '<h1>' + item.name + '<h1>';
    item.age = '<h2>' + item.age + '<h2>';
    return item;
  });
}
console.log(readyToPutInTheDOM4(users));

//Cách 5
console.log('===Cách 5===========');
//Arrow function
const items = users.map((item) => ({
  name: '<h1>' + item.name + '<h1>',
  age: '<h2>' + item.age + '<h2>',
}));
console.log(items);

//Cách 6
console.log('===Cách 6===========');
//Arrow function
function readyToPutInTheDOM6(arr) {
  return arr.map((item) => ({
    name: '<h1>' + item.name + '<h1>',
    age: '<h2>' + item.age + '<h2>',
  }));
}

console.log(readyToPutInTheDOM6(users)); */
/* const users = [
  {
    name: 'Angelina Jolie',
    age: 80,
  },
  {
    name: 'Eric Jones',
    age: 2,
  },
  {
    name: 'Paris Hilton',
    age: 5,
  },
  {
    name: 'Kayne West',
    age: 16,
  },
  {
    name: 'Bob Ziroll',
    age: 100,
  },
];
function readyToPutInTheDOM(arr) {
  return arr.map(
    (item) => '<h1>' + item.name + '</h1>' + '<h2>' + item.age + '</h2>'
  );
}

console.log(readyToPutInTheDOM(users));
 */

/*
function namesOnly(arr) {
 return arr.map(item => item.name);
}

function readyToPutInTheDOM(arr) {
  return arr.map(
    item => '<h1>' + item.name + '</h1>' + '<h2>' + item.age + '</h2>'
  );
}
*/
/* const rectangles = [
  { weight: 10, height: 5 } ,
  { weight: 10, height: 20 },
  { weight: 4, height: 16 } 
];

const areas = function (arr) {
  return arr.map((item) => item.weight * item.height);
};

console.log(areas(rectangles)); */

/*
//=====Xử lý Array.map=========
Các bước xử lý bài toán Map là:
b1: Viết thành: arr.map()
b2: Sau đó chuyển thành:
  arr.map(
    (item) => (newItem)
  )
b3: Chuyển thành
  arr.map(
    (item) => (
    
    )
)
===============================

//=====Xử lý function chứa Array.map=========
Các bước xử lý bài toán Map là:
b1: Viết thành: 
const calcX = function(arr){
  return arr.map();
}
b2: Sau đó chuyển thành:
const calcX = function(arr){
  return arr.map( function(item){
  //do something
  retun newItem;
  });
}
b3: Chuyển thành
const calcX = function(arr){
  return arr.map( 
    (item) => (newItem)
  );
}
===============================

*/
//Bài tập Tính tổng diện tích + chu vi của các hình chữ nhật thuộc mảng cho sẵn.
/* const rectangles = [
  { weight: 10, height: 5 } ,
  { weight: 10, height: 20 },
  { weight: 4, height: 16 } 
]; */
//Begin Debug
/* const calcX = function (arr) {
  //1. Tính diện tích + chu vi đối với mảng đã cho dùng arr.map sang 1 mảng result
  //2. Xử lý trả về dùng loop..of
  let Acreages = arr.map((item) => (item.height * item.weight) / 2);
  let Perimeters = arr.map((item) => 2 * (item.height + item.height));

  let items = arr.map(function (item) {
    return (item.height * item.weight) / 2 + 2 * (item.height + item.height);
  });
  let sum = 0;
  for (let i of items) {
    console.log(i, typeof i);
    sum += i;
  }

  console.log(Acreages);
  console.log(Perimeters);
  console.log(items);
  return sum;
}; */
//End Debug
/* const calcY = function (arr) {
  //1. Tính diện tích + chu vi đối với mảng đã cho dùng arr.map sang 1 mảng result
  //2. Xử lý trả về dùng loop..of
  let items = arr.map(
    (item) => (item.height * item.weight) / 2 + 2 * (item.height + item.height)
  );
  let sum = 0;
  for (let i of items) {
    sum += i;
  }
  return sum;
}; */
//NOTE LoopIn dùng cho Object => IO hoặc Ơi LOI LợI : Loop.Object.In
//NOTE LoopOff dùng cho Array mảng => Ao hoặc MaNgo mán, Gỗ Ao Áo Lào: Loop.Array.Off
//GOOD Lợi hoặc Lào :D
/* console.log(calcY(rectangles));

const calcZ = function (arr) {
  let sum = 0;
  for (let i of arr) {
    sum += (i.height * i.weight) / 2 + 2 * (i.height + i.height);
  }
  return sum;
};
console.log(calcZ(rectangles));
 */
//ReDO làm lại Đệ Quy
/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau,
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */
//Example
/* var aparts = {
  bedroom: {
    area: 20,
    bed: {
      ztype: 'twin-bed',
      price: 100,
    },
  },
  livingrom: {
    area: 10,
    table: {
      type: 'long-chair',
      price: 12,
    },
    televison: {
      type: 'Sony',
      price: 4000,
      kind: {
        log: 'SN200',
        model: 2020,
      },
    },
  },
}; */
// console.log(aparts);
/*
//NOTE Qui trình làm BAD
- Kiểm tra đối tượng có phải Object????
- Đẩy các phần tử của đối tượng vào mảng X
- Kiểm tra nếu phần tử là Object, thì call lại đệ qui xử lý cho Object.item BUG
check đối tượng bằng cú pháp: Object.getOwnPropertyNames(obj).length ??? chưa chắn chắn FAIL
*/
//BEGIN_DEBUG
/* function isEmptyObject(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
}
let arrs = [];
let getPropertyNames = function (obj) {
  if (!isEmptyObject(obj)) {
    for (let item in obj) {
      arrs.push(item);
    }
  }
};

let calcGet = function (obj) {
  for (var prop in obj) {
    getPropertyNames(obj);
    if (!isEmptyObject(obj[prop])) {
      calcGet(obj[prop]);
    }
  }
};

console.log(calcGet(aparts, []));
//END_DEBUG
 */
