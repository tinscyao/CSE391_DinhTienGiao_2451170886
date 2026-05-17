Câu A1:

## Đoạn 1
Output:
```js
undefined
```

Giải thích: `var` được hoisting.

---

## Đoạn 2
Output:
```js
ReferenceError
```

Giải thích: `let` có TDZ.

---

## Đoạn 3
Output:
```js
TypeError
```

Giải thích: `const` không cho gán lại giá trị.

---

## Đoạn 4
Output:
```js
[1, 2, 3, 4]
```

Giải thích: `const` vẫn sửa được nội dung mảng.

---

## Đoạn 5
Output:
```js
Trong block: 2
Ngoài block: 1
```

Giải thích: `let` có block scope.

Câu A2:

# A2 — Data Types & Coercion

```js
typeof null           // "object"
typeof undefined      // "undefined"
typeof NaN            // "number"

"5" + 3               // "53"
"5" - 3               // 2
"5" * "3"             // 15

true + true           // 2

[] + []               // ""
[] + {}               // "[object Object]"
{} + []               // 0
```

## Giải thích

- `"5" + 3`
  - Dấu `+` ưu tiên nối chuỗi
  - `3` được ép sang string
  - Kết quả: `"53"`

- `"5" - 3`
  - Dấu `-` chỉ dùng cho toán học
  - `"5"` được ép sang number
  - Kết quả: `2`

Câu A3:

# A3 — == vs ===

```js
5 == "5"                  // true
5 === "5"                 // false

null == undefined         // true
null === undefined        // false

NaN == NaN                // false

0 == false                // true
0 === false               // false

"" == false               // true
```

## Quy tắc

Nên dùng:

```js
===
```

Vì:

- `===` so sánh cả giá trị và kiểu dữ liệu
- Không ép kiểu tự động
- Ít gây bug hơn
- Dễ đọc và dễ kiểm soát hơn

Câu A4:

# A4 — Truthy & Falsy

## Các giá trị Falsy trong JavaScript

```js
false
0
-0
0n
""
null
undefined
NaN
```

Mọi giá trị khác đều là Truthy.

---

## Dự đoán kết quả

```js
if ("0") console.log("A");      // In
if ("") console.log("B");       // Không in
if ([]) console.log("C");       // In
if ({}) console.log("D");       // In
if (null) console.log("E");     // Không in
if (0) console.log("F");        // Không in
if (-1) console.log("G");       // In
if (" ") console.log("H");      // In
```

## Kết quả được in ra

```js
A
C
D
G
H
```

## Giải thích

- `"0"` là chuỗi khác rỗng → Truthy
- `""` là chuỗi rỗng → Falsy
- `[]` và `{}` luôn là Truthy
- `0` là Falsy
- `-1` khác 0 → Truthy
- `" "` chứa khoảng trắng nên không rỗng → Truthy