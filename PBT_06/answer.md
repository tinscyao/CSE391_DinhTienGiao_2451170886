Câu A1:

| Kích thước    | Số cột | Layout                    |
| ------------- | ------ | ------------------------- |
| `<768px`      | 1      | Box1 / Box2 / Box3 / Box4 |
| `768px-991px` | 2      | Box1 Box2 / Box3 Box4     |
| `≥992px`      | 4      | Box1 Box2 Box3 Box4       |

    col-md-6 = từ màn hình md trở lên chiếm 6/12 cột (=50%).
    Không cần col-sm-12 vì col-12 đã áp dụng mặc định cho mobile rồi.

 Câu A2:

 # Câu A2 (10đ) — Utilities & Components

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

