
### Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

**3 cách viết hàm `tinhThueBaoHiem(luong)`:**

```javascript
// 1. Function Declaration
function tinhThueBaoHiem(luong) {
    var thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return { thue: thue, thuc_nhan: luong - thue };
}

// 2. Function Expression
var tinhThueBaoHiem2 = function(luong) {
    var thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return { thue: thue, thuc_nhan: luong - thue };
};

// 3. Arrow Function
var tinhThueBaoHiem3 = (luong) => {
    var thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return { thue: thue, thuc_nhan: luong - thue };
};
```

**Câu hỏi: 3 cách này có khác nhau về hoisting không?**

**Trả lời:** Có, khác nhau về hoisting:
- **Function Declaration**: Được hoisting hoàn toàn, có thể gọi trước khi khai báo.
- **Function Expression và Arrow Function**: Chỉ tên biến được hoisting, nhưng giá trị thì không. Nếu gọi trước khi khai báo sẽ báo lỗi.

**Ví dụ:**
```javascript
console.log(test1()); // "Chạy được" - Function Declaration hoisting
console.log(test2()); // Lỗi: Cannot access 'test2' before initialization

function test1() {
    return "Chạy được";
}

const test2 = () => {
    return "Không chạy được";
};
```

---

### Câu A2 (5đ) — Scope & Closure

**Đoạn 1:**
```javascript
const c = counter();
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
```

**Đoạn 2:**
```javascript
// Output sau 200ms:
// var: 3
// var: 3
// var: 3
// let: 0
// let: 1
// let: 2
```

**Giải thích tại sao `var` và `let` cho kết quả khác nhau:**

- **var**: Có function scope, không có block scope. Biến `i` là chung cho cả vòng lặp. Khi setTimeout chạy sau 100ms, vòng lặp đã kết thúc và `i = 3`. Nên cả 3 lần đều in ra 3.

- **let**: Có block scope. Mỗi lần lặp tạo ra một biến `j` riêng. setTimeout nhớ được giá trị `j` của lần lặp đó nhờ closure. Nên in ra 0, 1, 2.

---

### Câu A3 (5đ) — Array Methods

```javascript
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
nums.filter(function(x) { return x % 2 === 0; });  // [2, 4, 6, 8, 10]

// 2. Nhân mỗi số với 3
nums.map(function(x) { return x * 3; });  // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// 3. Tính tổng tất cả
nums.reduce(function(sum, x) { return sum + x; }, 0);  // 55

// 4. Tìm số đầu tiên > 7
nums.find(function(x) { return x > 7; });  // 8

// 5. Kiểm tra CÓ số > 10 không
nums.some(function(x) { return x > 10; });  // false

// 6. Kiểm tra TẤT CẢ đều > 0
nums.every(function(x) { return x > 0; });  // true

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
nums.map(function(x) { 
    if (x % 2 === 0) {
        return "Số " + x + " là chẵn";
    } else {
        return "Số " + x + " là lẻ";
    }
});

// 8. Đảo ngược mảng (không mutate gốc)
nums.slice().reverse();  // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

---

### Câu A4 (5đ) — Object Destructuring & Spread

```javascript
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
console.log(specs);                     // Lỗi: specs is not defined (vì đã destructure thành ram, color)

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000 (gốc KHÔNG đổi)

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        // 16 (gốc BỊ đổi!)
// Vì spread chỉ copy shallow (nông), specs là object nên cả 2 trỏ đến cùng 1 object
```

---

## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Refactor Code

**Code sau khi refactor:**

```javascript
function processOrders(orders) {
    // Bước 1: Lọc orders đã hoàn thành và total > 100000
    var filtered = orders.filter(function(order) {
        return order.status === "completed" && order.total > 100000;
    });
    
    // Bước 2: Tạo object mới với discount
    var mapped = filtered.map(function(order) {
        return {
            id: order.id,
            customer: order.customer,
            total: order.total,
            discount: order.total * 0.1,
            finalTotal: order.total * 0.9
        };
    });
    
    // Bước 3: Sắp xếp theo finalTotal giảm dần
    var sorted = mapped.sort(function(a, b) {
        return b.finalTotal - a.finalTotal;
    });
    
    return sorted;
}
```

---

### Câu C2 (10đ) — Thiết kế API

```javascript
var miniArray = {
    // map: biến đổi từng phần tử trong mảng
    map: function(arr, fn) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },
    
    // filter: lọc các phần tử thỏa mãn điều kiện
    filter: function(arr, fn) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },
    
    // reduce: gộp mảng thành 1 giá trị
    reduce: function(arr, fn, initialValue) {
        var accumulator = initialValue;
        for (var i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};

// Test:
console.log(miniArray.map([1, 2, 3], function(x) { return x * 2; }));         // [2, 4, 6]
console.log(miniArray.filter([1, 2, 3, 4], function(x) { return x > 2; }));   // [3, 4]
console.log(miniArray.reduce([1, 2, 3, 4], function(a, b) { return a + b; }, 0)); // 10
```
