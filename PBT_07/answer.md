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
