# Các Method của Array hay sử dụng

## 01. Array mảng

```js
const items = ['a','b','c',1,2,3,4,...];
items[index]
items[0];//Giá trị index 0
items[1];//Giá trị index 1
...
items[n];//Giá trị index n
```

## 02. array.length

Số phần tử của Mảng

```js
const items = ['a', 'b', 'c', 1, 2, 3];
items.length; // 6 item
```

## 03. array[index]

Lấy ra giá trị của vị trí index của mảng.

```js
const items = ['a', 'b', 'c', 1, 2, 3];
items[0]; //a lấy giá trị phần tử đầu tiên
items[1]; //b lấy giá trị phần tử thứ 2
items[items.length - 1]; //3 lầy phần tử cuối mảng
```

## 04. array.push(value)

Thêm 1 giá trị value phần tử vào cuối mảng.

```js
let items = ['a', 'b', 'c'];
console.log(items.push('d')); // 4 Thay đổi độ dài
console.log(items); // ['a', 'b', 'c','d'];
```

## 05. array.pop

Xóa đi phần tử ở cuối mảng.

```js
let items = ['a', 'b', 'c'];
items.pop();
console.log(items); // ['a', 'b'];
```

## 06. array.unshift(value)

Thêm 1 giá trị value phần tử vào đầu mảng.

```js
let items = ['a', 'b', 'c'];
items.unshift('d');
console.log(items); // ['d','a', 'b','c'];
```

## 06. array.shift(value)

Xóa phần tử đầu tiên của mảng.

```js
let items = ['a', 'b', 'c'];
items.shift();
console.log(items); // ['b','c'];
```

## 07. arrayA.concat(arrayB)

Trả về 1 mảng A + B.

```js
let arrayA = ['a', 'b', 'c'];
let arrayB = [1, 2, 'c'];
console.log(arrayA.concat(arrayB)); //['a', 'b', 'c', 1, 2, 'c']
console.log(arrayB.concat(arrayC)); //[1, 2, 'c','a', 'b', 'c']
console.log(arrayA); //['a', 'b', 'c']
console.log(arrayB); //[1, 2, 'c']
arrayA = arrayA.concat(arrayB);
console.log(arrayA); //['a', 'b', 'c', 1, 2, 'c']
```

- **_Không thay đổi mảng._**

```js
let arrayA = ['a', 'b', 'c'];
let arrayB = [1, 2, 'c'];
console.log(arrayA.concat(arrayB)); //['a', 'b', 'c', 1, 2, 'c']
console.log(arrayA); //['a', 'b', 'c']
console.log(arrayB); //[1, 2, 'c']
arrayA = arrayA.concat(arrayB);
console.log(arrayA); //['a', 'b', 'c', 1, 2, 'c']
```

## 07. array.slice

Lấy ra mảng phần từ từ vị trí index start đến vị trí index end

- **_Không thay đổi mảng._**
  > arr.slice(start, end)

```js
console.log(arr.slice(1, 5)); //['a', 'b', 1, 2, 'c', 'd']
console.log(arr); //['a', 'b', 1, 2, 'c', 'd', 'e']
```

## 08. array.splice

> arr.splice(start, n)
> arr.splice(start, start+ n-1)

- Lấy ra mảng n phần tử từ vị trí index start đến index start + n-1
- **_Bảng bị thay đổi._**

```js
let arr = ['a', 'b', 1, 2, 'c', 'd', 'e'];
console.log(arr.splice(1, 4)); //['b', 1, 2, 'c']
console.log(arr); //['a', 'd', 'e']
```

## 09. Array.from

- Chuyển 1 string thành 1 mảng các ký tự.
  > Array.from(String) -> ['S','t','r','i','n','g']

```js
console.log(Array.from('John Smith')); //['J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h']
let arr = Array.from('John Smith');
console.log(arr); //['J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h']
```

## 10. find

## 11. filter

## 12. sort

## 13. map

## 14. reduce
