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