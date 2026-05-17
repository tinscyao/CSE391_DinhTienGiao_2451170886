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