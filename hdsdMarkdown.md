#Hướng dẫn dùng MarkDown

## Mục Lục {#custom-id}

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [Mục Lục](#custom-id)
- [Các cấp Heading](#các-cấp-heading)
- [Heading 2](#heading-2)
- [Formart Text](#formart-text)
- [Chèn link](#chèn-link)
- [Table bảng](#table-bảng)
- [Code Style](#code-style)
- [Insert Image](#insert-image)
- [Insert Graph Biểu đồ và Đồ Thị](#insert-graph-biểu-đồ-và-đồ-thị)
- [Công thức toán](#công-thức-toán)
- [CheckBox](#checkbox)
- [Lists](#lists)
- [**_Horizontal rule:_**](#_horizontal-rule_)

<!-- /code_chunk_output -->

## Các cấp Heading

# Heading 1

## Heading 2

### Mục 3

#### Mục 4

##### Mục 5

## Formart Text

[link Google](https://www.google.com)

Email: quangduy.dinh@gmail.com
google.com
**Đây là chữ đậm**

_Đây là chữ nghiêng_(`*Đây là chữ nghiêng*`)

_Đây cũng là chữ nghiêng_
~~gạch ngang dòng này~~
**_Đây là chữ vừa đậm vừa nghiêng_**

> Đây là một quotation
> Hãy luôn `khát khao`, mãi luôn đắm say. `Quang Duy`

hãy nhấn mạnh `mấy từ này` như vậy nhé.

Đây là một đoạn văn bản thông thường, không có định dạng nào cả nhé.[^1]

## Chèn link

[Đây là link trực tiếp](https://tinhte.vn/)
[Đây là link chèn trực tiếp có Tiêu Đề Hover](https://tinhte.vn 'Chuyên trang tin tức Công Nghệ tinhte.vn')
[Đây là link chèn trực tiếp](https://google.com.vn 'Trang chủ Google Việt Nam')

<!-- Hiện không dùng kiểu reference này được [linkRef]-->

[Link chèn kiểu reference][link ref 'không dùng được kiểu này']

[link ref]: tuoitre.vn

https://tuoitre.vn

[Học Markdown trong 5 Phút](hdsdmarkdown.md)

## Table bảng

**Bảng A**

<!-- NOTE Hạn chế prettier tại Table -->
<!-- prettier-ignore -->
| STT | Đội        | Trận | Thắng | Hòa | Thua | BT | SBT | HS | Điểm |
|-----|:-----------|:----:|:-----:|:----|:----:|:--:|:---:|:--:|-----:|
| 1   | Ý          |  3   |   3   | 0   |  0   | 7  |  0  | 7  |    9 |
| 2   | Wales      |  3   |   1   | 1   |  1   | 3  |  2  | 1  |    4 |
| 3   | Thụy Sĩ    |  3   |   1   | 1   |  1   | 4  |  5  | -1 |    4 |
| 4   | Thổ Nhĩ Kỳ |  3   |   0   | 0   |  3   | 1  |  8  | -7 |    0 |

<!-- prettier -->

| STT | Canh trái | Canh phải | Canh giữa |
| --- | :-------- | --------: | :-------: |
| 1   | Trái      |      Phải |   Giữa    |
| 2   | Trái      |      Phải |   Giữa    |

## Code Style

SQL

```SQL
SELECT * FROM TableA
DELETE TableA
WHERE columB >0
```

Javascript

```js
let helloWorld = 'Hello World! Xin chào!';
console.log(helloWorld);
```

HTML

```html
<form id="your-name">
  <h2>Your name here</h2>
  <p class="first">Fill to form:</p>
  <input type="email" placeholder="Your name here" />
  <button>OK!</button>
</form>
```

```css
body {
  background-color: rgb(181, 231, 134);
  font-family: sans-serif;
  font-size: 20px;
}
```

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Insert Image

_Cấu trúc_ `![Tên hình](link của hình ảnh "Tên hình Hover")`

![Logo Đà Nẵng](https://lh3.googleusercontent.com/proxy/XZtrNWkL0mdSyas5RRo2kzMp83bOSKrQGEZWVJogg_h-rhNKT28K7rHcGYIduICTCWdSRBlxbz_5zWKEEIdZeiHVAMTAj2nW8NhCUSD5SQ 'Logo Đà Nẵng')

![Getting Started](image01.png 'Snap Code')

<img src="image02.png" alt="Getting started" title="SalesForce" />

## Insert Graph Biểu đồ và Đồ Thị

### Mermaid

<!-- TODO Comment-->
<!-- ```Mermaid
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    <!-- section Go home -->

      Go downstairs: 5: Me
      Sit down: 5: Me

````-->

​```Mermaid
pie title Pets adopted by volunteers
"Dogs" : 20
"Cats" : 12
"Rats" : 15

````

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Công thức toán

$log(n)^2= Ln(y)-2e$

$$
y = x^2
$$

$$
log(y)=x/(log(x)-1)
ax^2 +bx + c = 0
S_n=n^n + (n-1)^n +...+ 2^n + 1
$$

$(a + b)^2 = a^2 + b^2 + 2ab$

$$
(a-b)^2 = a^2 + b^2 - 2ab
$$

## CheckBox

- [x] Check kiểm tra
- [ ] Chưa check

* [x] checked
* [ ] not checked

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Lists

**Danh sách không theo thứ tự:**

- Trường A
- Trường B
- Trường C

  - Lớp x
  - Lớp y
  - Lớp z
    - Tổ 1
    - Tổ 2
    - Tổ 3
      - Nhóm 1
      - Nhóm 2

- Trái cây:
  1. Táo
     - Ép
     - Dầm
  2. Nho
  3. Lê
  4. Cam

## **_Horizontal rule:_**

- Rule 1 content
- Rule 2 content
- Rule 3 content
- Rule 4 content

`code`
Here's a simple footnote,[^2] and here's a longer one.[^bignote]

Here's a sentence with a footnote.[^3]
Anh đó là ai.[^4]

![Getting Started](image03.png 'Mô tả thể hiện')

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

~~The world is flat.~~

[Heading IDs](#custom-id)
<a href="#email-id">Goto Email</a>

### Automatic URL Linking

http://www.example.com

### Disabling Automatic URL Linking

`http://www.example.com`

[^1]: Ghi chú.
[^2]: This is the footnote.
[^3]: Mr Holmes
[^4]: Mô tả ghi chú thêm vào.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
