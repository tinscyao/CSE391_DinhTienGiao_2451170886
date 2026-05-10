Câu A1 (5đ) — Viewport & Mobile-First
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* `width=device-width`
  → Chiều rộng trang = chiều rộng màn hình thiết bị.

* `initial-scale=1.0`
  → Mức zoom ban đầu = 100%.

Nếu thiếu thẻ này:

* iPhone sẽ giả lập trang như desktop (~980px).
* Nội dung bị thu nhỏ.
* Chữ nhỏ, phải zoom mới đọc được.

---

### Mobile-First

Viết CSS cho mobile trước, rồi mở rộng cho desktop.

```css
.box{
    width: 100%;
}

@media (min-width:768px){
    .box{
        width: 50%;
    }
}
```

---

### Desktop-First

Viết CSS cho desktop trước, rồi giảm xuống mobile.

```css
.box{
    width: 50%;
}

@media (max-width:768px){
    .box{
        width: 100%;
    }
}
```

---

### Vì sao Mobile-First được khuyên dùng?

* Tối ưu cho điện thoại trước.
* Code gọn hơn.
* Hiệu năng tốt hơn trên mobile.
* Phù hợp xu hướng người dùng điện thoại hiện nay.

Câu A2 (5đ) — Breakpoints

# Breakpoints

## Extra Small
- Kích thước: `<576px`
- Thiết bị: điện thoại nhỏ
- Ví dụ lưới sản phẩm: 1 cột

## Small (sm)
- Kích thước: `≥576px`
- Thiết bị: điện thoại lớn
- Ví dụ lưới sản phẩm: 2 cột

## Medium (md)
- Kích thước: `≥768px`
- Thiết bị: tablet
- Ví dụ lưới sản phẩm: 2–3 cột

## Large (lg)
- Kích thước: `≥992px`
- Thiết bị: laptop
- Ví dụ lưới sản phẩm: 3–4 cột

## Extra Large (xl)
- Kích thước: `≥1200px`
- Thiết bị: desktop lớn
- Ví dụ lưới sản phẩm: 4–5 cột

## XXL
- Kích thước: `≥1400px`
- Thiết bị: màn hình rất lớn
- Ví dụ lưới sản phẩm: 5–6 cột

Câu A3 (5đ) — Media Queries

| Chiều rộng màn hình | .container width |
|---|---|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

Câu A4 (5đ) — SCSS Basics

# SCSS Basics

## 1. Variables
Dùng để lưu giá trị và tái sử dụng nhiều lần.

```scss
$primary-color: blue;

button{
    background: $primary-color;
}