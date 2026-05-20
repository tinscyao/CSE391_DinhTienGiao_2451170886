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


## 1. Số dòng CSS cần viết

### CSS thuần
- Phải tự viết:
  - flex/grid
  - responsive
  - navbar
  - card
  - spacing
- Thường nhiều dòng CSS hơn

Ví dụ:
```css
.header{
    display:flex;
    justify-content:space-between;
}
```

### Bootstrap
- Chủ yếu dùng class có sẵn:
```html
<nav class="navbar navbar-expand-lg">
```

→ Gần như không cần tự viết CSS.

---

## 2. Thời gian phát triển

### CSS thuần
- Chậm hơn
- Phải tự responsive và test layout

### Bootstrap
- Nhanh hơn nhiều
- Có sẵn:
  - navbar
  - card
  - modal
  - grid system

→ Phù hợp làm prototype hoặc deadline ngắn.

---

## 3. Khả năng tùy biến

### CSS thuần
- Tùy biến rất cao
- Kiểm soát toàn bộ UI

### Bootstrap
- Dễ bị giống template Bootstrap
- Custom sâu hơi khó nếu không dùng SASS

---

## 4. Khi nào NÊN dùng Bootstrap?

- Dự án cần làm nhanh
- Admin dashboard
- Website CRUD
- Team frontend nhỏ
- Prototype/MVP

---

## 5. Khi nào KHÔNG NÊN dùng Bootstrap?

- UI design quá đặc biệt
- Cần animation/custom design mạnh
- Muốn tối ưu CSS rất nhỏ
- Design system riêng