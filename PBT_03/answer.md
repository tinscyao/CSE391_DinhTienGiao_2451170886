Câu A1:
1. Inline CSS (CSS trực tiếp)
Phương pháp này sử dụng thuộc tính style ngay trong thẻ mở của phần tử HTML.

Ví dụ:

HTML
<h1 style="color: blue; font-size: 20px;">Chào mừng bạn!</h1>
Ưu điểm: Nhanh chóng, tiện lợi khi cần thay đổi kiểu dáng gấp cho một phần tử duy nhất mà không cần mở file CSS.

Nhược điểm: Làm code HTML trở nên rối rắm, khó bảo trì; không thể tái sử dụng định dạng cho các phần tử khác.
Khi nào nên dùng: Khi muốn kiểm tra nhanh một thuộc tính hoặc cần áp dụng style đặc thù cho duy nhất một thẻ mà không muốn ảnh hưởng đến toàn cục.
2. Internal CSS (CSS nội bộ)
Sử dụng cặp thẻ <style> đặt bên trong phần <head> của trang HTML.

Ví dụ:

HTML
<head>
  <style>
    p {
      color: red;
      line-height: 1.5;
    }
  </style>
</head>
Ưu điểm: Giúp quản lý toàn bộ định dạng của một trang web tại một nơi duy nhất trong file đó.

Nhược điểm: Chỉ có tác dụng trên một trang web cụ thể. Nếu website có nhiều trang, bạn sẽ phải copy-paste đoạn mã này sang từng file, dẫn đến khó cập nhật đồng bộ.

Khi nào nên dùng: Phù hợp cho những trang web đơn lẻ (Landing Page) hoặc khi bạn chỉ muốn định dạng riêng biệt cho một trang mà không muốn tạo file .css rời.
3. External CSS (CSS bên ngoài)
Viết mã CSS vào một file riêng biệt có đuôi .css, sau đó liên kết vào file HTML bằng thẻ <link>.

Ví dụ:

HTML
<!-- Trong file index.html -->
<head>
  <link rel="stylesheet" href="style.css">
</head>
CSS
/* Trong file style.css */
body {
  background-color: #f0f0f0;
}
Ưu điểm: Cách làm chuyên nghiệp nhất. Giúp tách biệt hoàn toàn nội dung (HTML) và giao diện (CSS). Có thể dùng một file CSS cho hàng trăm trang web, giúp việc bảo trì cực kỳ dễ dàng và giảm dung lượng tải trang.

Nhược điểm: Cần thêm một yêu cầu HTTP để tải file CSS về, nếu đường dẫn sai thì trang web sẽ mất định dạng.

Khi nào nên dùng: Luôn luôn nên dùng cho các dự án thực tế và website có nhiều hơn một trang.

Trả lời câu hỏi thêm: Cách nào "thắng"?
Nếu cùng một element chịu tác động của cả 3 cách trên, thứ tự ưu tiên (từ cao xuống thấp) thường là:

Inline CSS (Thắng tuyệt đối)

Internal CSS và External CSS (Hai loại này có độ ưu tiên ngang nhau, cái nào nằm dưới trong file HTML - tính từ trên xuống - sẽ được áp dụng).

Giải thích:
Đây chính là khái niệm Cascading (Xếp chồng) trong CSS. Trình duyệt đọc mã từ trên xuống dưới.

Inline CSS thắng vì nó nằm "gần" phần tử nhất, mang tính cụ thể cao nhất.

Giữa Internal và External, nếu chúng có cùng độ ưu tiên về selector (ví dụ đều chọn thẻ p), thì trình duyệt sẽ ưu tiên thuộc tính nào được khai báo sau cùng (quy tắc ghi đè).
** Lưu ý: Nếu sử dụng từ khóa !important trong bất kỳ cách nào, nó sẽ phá vỡ mọi quy tắc trên và chiếm quyền ưu tiên cao nhất.

Câu A2:
1. h1                           → Chọn: ShopTLU
2. .price                       → Chọn: 25.990.000đ
3. #app header                  → Chọn: Chọn toàn bộ thẻ <header> bên trong #app, chứa text: ShopTLU Home Products About
4. nav a:first-child             → Chọn:thẻ <a> đầu tiên trong <nav>: Home
5. .product.featured h2         → Chọn:  <h2> bên trong .product.featured:MacBook Pro
6. article > p                  → Chọn: tất cả <p> là con trực tiếp của <article>: 25.990.000đ
7. a[href="/"]                  → Chọn: thẻ <a> có href="/": Home
8. .top-bar.dark h1              → Chọn:  <h1> bên trong .top-bar.dark: ShopTLU

Câu A3:
1. Trường hợp 1: content-box (Mặc định)Chiều rộng hiển thị: $450px$  Không gian chiếm trên trang: $470px$  Công thức: Chiều rộng hiển thị = $Width + Padding + Border$.  
2. Trường hợp 2: border-boxChiều rộng hiển thị: $400px$  Kích thước content thực tế: $350px$  Không gian chiếm trên trang: $420px$  Công thức: $Width$ đã bao gồm cả $Padding$ và $Border$.  
3. Trường hợp 3: Margin Collapse (Gộp lề)Khoảng cách (.box-a & .box-b): $40px$  

Giải thích: Trình duyệt lấy giá trị lớn nhất: max(25, 40) = 40px.  

Nâng cao: Margin âmKhoảng cách: 30px 

Giải thích: Cộng đại số khi có lề âm: 40 + (-10) = 30px.  

Câu A4:
1. Tính Specificity Score (a, b, c)
Rule A (p): (0, 0, 1) — Chỉ có 1 thẻ HTML (Element).  

Rule B (.price): (0, 1, 0) — Chỉ có 1 Class.  

Rule C (#main-price): (1, 0, 0) — Chỉ có 1 ID.  

Rule D (p.price): (0, 1, 1) — Gồm 1 thẻ HTML và 1 Class.  

2. Element sẽ có màu gì?
Kết quả: Màu đỏ (Red).

  

Giải thích: Rule C thắng vì nó sử dụng ID selector. Trong CSS, 1 điểm ở cột ID (a) luôn luôn thắng bất kỳ số lượng điểm nào ở cột Class (b) hoặc Element (c).  

3. Nếu thêm Inline Style (màu cam)
Kết quả: Màu cam (Orange).

Giải thích: Thuộc tính style viết trực tiếp trong thẻ HTML (Inline Style) có độ ưu tiên cao hơn tất cả các bộ chọn (Selector) nằm trong file CSS bên ngoài hoặc thẻ <style>.  

4. Nếu Rule A thêm !important
Kết quả: Màu đen (Black).

Giải thích: Từ khóa !important là quyền năng cao nhất trong CSS. Nó sẽ ghi đè lên tất cả các quy tắc về độ ưu tiên khác, bao gồm cả ID selector và Inline Style.
