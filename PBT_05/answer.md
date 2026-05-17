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

Câu C1:


## 2. Phân tích thay đổi giao diện

* **Navigation (Thanh điều hướng):**
  * **Desktop:** Hiện đầy đủ thanh menu ngang chứa các chuyên mục (Thời sự, Góc nhìn, Thế giới...).
  * **Tablet:** Menu ngang bị thu hẹp, một số chuyên mục phụ chuyển vào nút ba sọc (Hamburger menu).
  * **Mobile:** Menu ngang biến mất hoàn toàn, thay thế bằng nút **Hamburger menu** ở góc góc trên bên trái/phải để thu gọn.

* **Lưới content (Grid System):**
  * **Desktop:** Chia nhiều cột phức tạp (thường là 3 - 4 cột gồm: tin chính lớn, cụm tin phụ bên cạnh và cột quảng cáo/tin xem nhiều bên phải).
  * **Tablet:** Rút gọn còn 2 cột (1 cột tin tức chính và 1 cột phụ).
  * **Mobile:** Chuyển hoàn toàn về **1 cột** duy nhất theo chiều dọc, các tin xếp chồng lên nhau để dễ vuốt.

* **Elements bị ẩn trên Mobile:**
  * Toàn bộ banner quảng cáo dạng lớn ở hai bên rìa trang (cánh trang web).
  * Các widget phụ như: Hộp thông tin giá vàng/thời tiết/tỷ giá (hoặc bị thu nhỏ diện tích).
  * Cột "Xem nhiều nhất" hoặc "Bình luận nhiều nhất" ở thanh bên (Sidebar).

* **Font size (Kích thước chữ):**
  * Có thay đổi rõ rệt. Trên Desktop, tiêu đề tin lớn (H1) thường là `32px` - `40px` để gây chú ý. Xuống Mobile, font-size tiêu đề giảm xuống còn khoảng `22px` - `24px` để tránh chiếm hết màn hình và không bị xuống dòng quá nhiều.

