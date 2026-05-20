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


Câu A5:

# A5 — Template Literals

## Cách 1

```js
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

---

## Cách 2

```js
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

---

## Cách 3

```js
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

Câu C1:

# Báo cáo lỗi chương trình JavaScript

---

# Lỗi 1: Dùng phép gán thay vì phép so sánh

## Code lỗi

```javascript
if (giaSauGiam = 0)
```

## Giải thích
- `=` là phép gán
- Không phải phép so sánh

Dòng code này sẽ:
- gán `giaSauGiam = 0`
- điều kiện luôn sai

## Cách sửa

```javascript
if (giaSauGiam === 0)
```

---

# Lỗi 2: Truyền string thay vì number

## Code lỗi

```javascript
const gia = tinhGiaGiamGia("100000", 20)
```

## Giải thích
- `"100000"` là kiểu string
- JavaScript sẽ ép kiểu ngầm

Điều này dễ gây lỗi nếu dữ liệu không hợp lệ:

```javascript
"100000abc" * 20
// NaN
```

## Cách sửa

### Cách 1: Truyền đúng kiểu dữ liệu

```javascript
const gia = tinhGiaGiamGia(100000, 20)
```

### Cách 2: Ép kiểu trong hàm

```javascript
giaBan = Number(giaBan)
```

---

# Lỗi 3: Không validate dữ liệu đầu vào

## Code lỗi

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam)
```

## Giải thích
Hàm chưa kiểm tra:
- giá bán có phải số không
- phần trăm giảm có phải số không
- giá bán âm

## Hậu quả

```javascript
tinhGiaGiamGia("abc", 20)
```

→ trả về `NaN`

## Cách sửa

```javascript
if (
    isNaN(giaBan) ||
    isNaN(phanTramGiam) ||
    giaBan < 0
) {
    return "Dữ liệu không hợp lệ"
}
```

---

# Lỗi 4: Dùng var thay vì let/const

## Code lỗi

```javascript
var giamGia = giaBan * phanTramGiam / 100
```

## Giải thích
- `var` có function scope
- Dễ gây bug
- Khó kiểm soát phạm vi biến

## Cách sửa

```javascript
const giamGia = giaBan * phanTramGiam / 100
```

---

# Lỗi 5: Lỗi ẩn với var trong vòng lặp + setTimeout

## Code lỗi

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
```

## Giải thích

`var` không có block scope.

Tất cả callback của `setTimeout` dùng chung biến `i`.

Khi callback chạy xong:
```javascript
i = 5
```

Nên kết quả là:

```javascript
Item 5
Item 5
Item 5
Item 5
Item 5
```

## Cách sửa

```javascript
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
```

## Vì sao let sửa được?

`let` có block scope.

Mỗi vòng lặp sẽ tạo một biến `i` riêng:
- vòng 1 → i = 0
- vòng 2 → i = 1
- ...

Nên kết quả đúng:

```javascript
Item 0
Item 1
Item 2
Item 3
Item 4
```

---

# Lỗi 6: Hàm trả về nhiều kiểu dữ liệu

## Code lỗi

```javascript
return "Phần trăm giảm không hợp lệ"
```

và

```javascript
return giaSauGiam
```

## Giải thích
Hàm lúc:
- trả về string
- lúc trả về number

Điều này gây khó xử lý dữ liệu.

## Cách sửa

Có thể dùng:

```javascript
throw new Error("Phần trăm giảm không hợp lệ")
```

hoặc luôn trả về cùng một kiểu dữ liệu.

---

# Code hoàn chỉnh sau khi sửa

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {

    giaBan = Number(giaBan);
    phanTramGiam = Number(phanTramGiam);

    // Validate dữ liệu
    if (
        isNaN(giaBan) ||
        isNaN(phanTramGiam) ||
        giaBan < 0
    ) {
        return "Dữ liệu không hợp lệ";
    }

    // Validate phần trăm giảm
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }

    // Tính giảm giá
    const giamGia = giaBan * phanTramGiam / 100;

    // Giá sau giảm
    const giaSauGiam = giaBan - giamGia;

    // Kiểm tra miễn phí
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}


// Test
const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);


// Sửa lỗi var bằng let
for (let i = 0; i < 5; i++) {

    setTimeout(function () {
        console.log("Item " + i);
    }, 1000);

}
```
