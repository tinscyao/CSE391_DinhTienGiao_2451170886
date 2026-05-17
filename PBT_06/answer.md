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

# So sánh CSS thuần vs TailwindCSS

## 1. HTML File Size

### CSS thuần
- HTML ngắn hơn
- Style viết riêng trong file CSS

Ví dụ:
```html
<div class="container">
```

### TailwindCSS
- HTML dài hơn do viết utility class trực tiếp

Ví dụ:
```html
<div class="grid grid-cols-1 gap-5 p-5">
```

→ Tailwind làm HTML dài hơn nhưng giảm CSS riêng.

---

## 2. Maintainability

### CSS thuần
Ưu điểm:
- HTML sạch
- Dễ nhìn cấu trúc

Nhược điểm:
- CSS file lớn dần
- Dễ conflict class
- Sửa responsive phải tìm nhiều nơi

### TailwindCSS
Ưu điểm:
- Sửa trực tiếp trên HTML
- Responsive rõ ràng:
```html
md:grid-cols-2
xl:grid-cols-3
```

Nhược điểm:
- HTML nhiều class
- Ban đầu hơi khó đọc

---

## 3. Reusability

### CSS thuần
- Tái sử dụng bằng class:
```css
.card{
    padding:20px;
}
```

### TailwindCSS
- Tái sử dụng bằng:
  - component
  - @apply

Ví dụ:
```css
.card{
    @apply p-5 rounded-lg shadow-md;
}
```

→ Tailwind tái sử dụng nhanh hơn khi làm UI lớn.

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