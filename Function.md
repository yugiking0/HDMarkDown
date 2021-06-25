# Hướng dẫn Function

## Function Declaration

```js
function printLog(str) {
  return console.log(str);
}
printLog('Hello World!');
//Hello World!

function calcAge(yearBirth) {
  return 2021 - yearBirth;
}
calcAge(1991);
//30
```

## Function Expession

```js
const printLog = function (str) {
  return console.log(str);
};
printLog('Hello World!');
//Hello World!

const calcAge = function (yearBirth) {
  return 2021 - yearBirth;
};
calcAge(1991);
//30
```

## Arrow Function

```js
const printLog = (str) => console.log(str);
printLog('Hello World!');
//Hello World!

const calcAge = (yearBirth) => 2021 - yearBirth;
calcAge(1991);
//30
```

## Functions Calling Other Functions (CallBack)

```js
//Functions Double num
const double = (num) => num * 2;

//Function callback from another doubleNum inside
function transformDoubleArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let doubleNum = double(arr[i]);
    result.push(doubleNum);
  }
  return result;
}

transformDoubleArray([2, 4, 6, 8]);
//[4,8,12,16]
```

## Others declare Function

### Function as parameter(callBack)

Dùng function như một tham số

```js
const coffeeMachine = {
  name: 'Toshiba',
  //function as parameter of a Object
  makeCoffee: function (onFinish) {
    console.log('Making coffee...');
    onFinish(); //Callback another function
  },
};

function beep() {
  console.log('Tic Tic Tic!!!');
}

coffeeMachine.makeCoffee(beep);
//Alert convention
```

Có thể viết lại thành Function như sau:

```js
const coffeeMachine = {
  name: 'Toshiba',
  makeCoffee: function () {
    console.log('Making coffee...');
    console.log('Tic Tic Tic!!');
  },
};
```

Ngoài ra, Function còn được dùng cho Array như một method là **_`Array.map()`_** hoặc **_`Array.reduce()`_** như sau:

### Array.map()

Sẽ xử lý chuyển lại 1 mảng có cùng phần tử với mảng đã cho, hoặc xử lý tính toán các phần từ thuộc mảng đã cho gần giống Loop for..in.

**SYNTAX**

```js
array.map(function (item) {
  //Do something
  return newItem;
});
//Trả về 1 mảng có số phần tử bằng số phần tử của mảng đã cho.
```

Viết đơn giản lại thành:

```js
array.map(
  //Do something
  return newItem;
);

>> array.map((item) => (newItem));

function readyToPutInTheDOM(arr) {
//---------------------------
return arr.map(
    (item) => (
        {
            name: '<h1>' + item.name + '<h1>',
            age: '<h2>' + item.age + '<h2>'
        }
    ) //newItem
  );
//---------------------------
}

console.log(readyToPutInTheDOM(users));

function readyToPutInTheDOM(arr) {
  return arr.map((item) => ({
    name: '<h1>' + item.name + '<h1>',
    age: '<h2>' + item.age + '<h2>',
  })); //newItem
}
```

Ví dụ:

```js
const items = [1, 4, 9, 16];
// pass a function to map
const newItems = items.map(function (item) {
  return item * 2;
});

console.log(newItems);
// expected output: Array [2, 8, 18, 32]
```

Đơn giản lại khi dùng Arrow Function như sau:

```js
const items = [1, 4, 9, 16];
// pass a function to map
const newItems = items.map((x) => x * 2);

console.log(newItems);
// expected output: Array [2, 8, 18, 32]
```

**Ví dụ 02**

```js
let numbers = [1, 4, 9];
let doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(numbers);\\[1, 4, 9]
console.log(doubles);\\[2, 8, 18]
```

viết lại thành

```js
let numbers = [1, 4, 9];
let doubles = numbers.map((num) => num * 2);
console.log(numbers);\\[1, 4, 9]
console.log(doubles);\\[2, 8, 18]
```

**Ví dụ 03**

```js
let map = Array.prototype.map;
let a = map.call('Hello World', function (x) {
  return x.charCodeAt(0);
});
let b = map.call('Hello World', (x) => x.charCodeAt(0));
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
console.log(a);
console.log(b);
```

**Ví dụ 04**

```js
/*
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers,
 * sử dụng map method và hàm tripple để trả về 1 mảng
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

function tripple(num) {
  return 3 * num;
}
function multiply(numbers) {
  return numbers.map((x) => tripple(x));
}

console.log(multiply([1, 2, 3]));
//[3,6,9]
```

**Ví dụ 05**

```js
// Use array map make an array of strings of the names
var users = [
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
/*
function namesOnly(arr) {
  return arr.map(function(item) {
    return item.name;
  });
}
*/
function namesOnly(arr) {
  return arr.map((item) => item.name);
}

console.log(namesOnly(users));
```

#### Bài tập

```js
// Use array map make an array of the names in <h1></h1>,
//and the ages in <h2></h2>

const users = [
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
function readyToPutInTheDOM(arr) {
  //Item of Arr, Item of Items Array
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
```

### Array.reduce()

**SYNTAX**

```js
array.reduce(function (item) {
  //Do something
  return newItem;
});
```
