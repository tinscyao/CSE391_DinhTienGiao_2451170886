Câu A1:

| Kích thước    | Số cột | Layout                    |
| ------------- | ------ | ------------------------- |
| `<768px`      | 1      | Box1 / Box2 / Box3 / Box4 |
| `768px-991px` | 2      | Box1 Box2 / Box3 Box4     |
| `≥992px`      | 4      | Box1 Box2 Box3 Box4       |

    col-md-6 = từ màn hình md trở lên chiếm 6/12 cột (=50%).
    Không cần col-sm-12 vì col-12 đã áp dụng mặc định cho mobile rồi.

 Câu A2:

 # Câu A2 — Utilities & Components

## 1. Giải thích `d-none d-md-block`

```html
<div class="d-none d-md-block"></div>
```

- `<768px`: ẩn (`display: none`)
- `≥768px`: hiện (`display: block`)

---

## 2. 5 spacing utilities

- `mt-3` → margin-top
- `mb-auto` → margin-bottom: auto
- `ms-2` → margin-left
- `px-4` → padding trái + phải
- `py-1` → padding trên + dưới

---

## 3. Khác nhau giữa container

- `.container`
  - Có max-width theo breakpoint
  - Nội dung căn giữa

- `.container-fluid`
  - Rộng 100% màn hình

- `.container-md`
  - `<768px`: full width
  - `≥768px`: có max-width

Câu C1:



## 1. Đổi màu `$primary` sang `#E63946`

### Công cụ cần:
- Node.js
- npm
- SASS

### Quy trình:

Cài Bootstrap + Sass:
```bash
npm install bootstrap sass
```

Tạo file:
```scss
custom.scss
```

Sửa biến trước khi import Bootstrap:
```scss
$primary: #E63946;

@import "bootstrap/scss/bootstrap";
```

Compile:
```bash
sass custom.scss custom.css
```

Sau đó link:
```html
<link rel="stylesheet" href="custom.css">
```

---

## 2. Tại sao không nên override trực tiếp `.btn-primary`?

Ví dụ không nên:
```css
.btn-primary{
    background:red;
}
```

Vì:
- Chỉ sửa riêng button
- Các component khác dùng `$primary` không đổi màu
- Dễ conflict/update lỗi khi Bootstrap nâng version

Dùng SASS variables tốt hơn vì:
- Đồng bộ toàn hệ thống
- Navbar, alert, button, badge... cùng đổi màu
- Dễ maintain và scale project

Câu C2:


## 1. Tại sao Tailwind CSS cuối cùng nhỏ hơn Bootstrap?

- Bootstrap chứa sẵn rất nhiều component/class dù có dùng hay không.
- Tailwind chỉ build các utility class thực sự xuất hiện trong HTML.

→ Vì vậy file CSS production thường nhỏ hơn Bootstrap.

---

## 2. Tailwind PurgeCSS / JIT là gì?

### PurgeCSS
- Quét HTML/JS files
- Xóa các class không được sử dụng

Ví dụ:
```html
<div class="flex p-4"></div>
```

→ chỉ giữ:
```css
.flex{}
.p-4{}
```

### JIT (Just In Time)
- Sinh CSS ngay khi phát hiện class được dùng
- Không generate toàn bộ utility từ đầu

→ build nhanh hơn và CSS nhỏ hơn.

---

## 3. Khi nào KHÔNG nên dùng TailwindCSS?

### Trường hợp 1:
Project nhỏ/simple website

- Tailwind setup hơi dư thừa
- CSS thuần hoặc Bootstrap nhanh hơn

### Trường hợp 2:
Team chưa quen utility-first

- HTML quá nhiều class
- Khó đọc với người mới

Ví dụ:
```html
<div class="flex items-center justify-between p-4 bg-white rounded shadow">
```