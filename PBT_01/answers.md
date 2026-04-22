Câu A1:

1. Các bước xảy ra gồm:
   B1: Trình duyệt thực hiện DNS Lookup để tìm địa chỉ IP của máy chủ shopee.vn.
   B2: Thiết lập kết nối TCP/IP (và TLS Handshake để bảo mật HTTPS) giữa máy tính của bạn và server Shopee.
   B3: Trình duyệt gửi một HTTP Request (phương thức GET) để yêu cầu dữ liệu từ máy chủ.
   B4: Server xử lý và gửi trả về một HTTP Response (bao gồm mã trạng thái như 200 OK và nội dung file HTML).
   B5: Trình duyệt nhận các file (HTML, CSS, JS) và thực hiện quá trình Render để hiển thị giao diện lên màn hình.
2. - Tab network cho tha thấy những thông tin: + Danh sách các request + Chi tiết các thông tin của request + Các tài nguyên được gửi về (CSS, JS, IMG, FONT,...)
     ![Ảnh chụp tab Network](anh_chup_tab.jpg)
     Câu A2:
3. Trang web hiện tại bị đánh giá SEO thấp vì mắc lỗi lạm dụng thẻ <div> (thường gọi là "Div-itis"). Google và các công cụ tìm kiếm sử dụng các thẻ Semantic (thẻ có ý nghĩa) để lập chỉ mục và hiểu nội dung. Khi toàn bộ trang web chỉ sử dụng <div>, công cụ tìm kiếm sẽ gặp các vấn đề sau:
   - Không xác định được cấu trúc: Google Bot không biết đâu là phần quan trọng nhất, đâu là phần đầu trang hay chân trang.
   - Thiếu từ khóa tiêu đề: Các thẻ tiêu đề (<h1>, <h2>) là tín hiệu cực kỳ quan trọng để SEO tên sản phẩm.
   - Khả năng tiếp cận kém: Các thiết bị hỗ trợ người khiếm thị không thể đọc hiểu được mục đích của các thành phần trên trang.
4. Các lỗi Semantic cụ thể và cách sửa lại:

- Lỗi 1: Sử dụng <div class="header"> cho phần đầu trang.
  Sửa lại: Thay bằng thẻ <header>. Thẻ này giúp định danh phần chứa logo và bộ công cụ của trang web.
- Lỗi 2: Sử dụng <div class="menu"> cho thanh điều hướng.
  Sửa lại: Thay bằng thẻ <nav>. Đây là tín hiệu để Google biết các liên kết bên trong là hệ thống menu chính.

- Lỗi 3: Các mục menu con đang dùng thẻ <div> đơn lẻ.
  Sửa lại: Thay bằng cấu trúc danh sách <ul> (Unordered List) và <li> (List Item). Đây là quy chuẩn để trình bày các tập hợp liên kết điều hướng.
- Lỗi 4: Tên sản phẩm dùng <div class="title">.
  Sửa lại: Thay bằng thẻ tiêu đề <h1> (hoặc <h2>). Tiêu đề chứa từ khóa chính là yếu tố sống còn để sản phẩm xuất hiện khi người dùng tìm kiếm.
- Lỗi 5: Phần chân trang dùng <div class="footer">.
  Sửa lại: Thay bằng thẻ <footer>. Giúp Google tách biệt phần nội dung chính với phần thông tin bản quyền và liên hệ.

3. Sửa mã nguồn:
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<main>
    <article class="product">
        <h1>iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>
        <figure>
            <img src="iphone.jpg" alt="Điện thoại iPhone 16 Pro màu Titan">
        </figure>
    </article>
</main>

<footer>
    <small>© 2026 ShopTLU - All Rights Reserved</small>
</footer>
Câu A3:
Sơ đồ:
    Hộp 1
    Text A Text B
    Hộp 2
    Text C Text D
    Hộp 3
Giải thích:
    Kết quả trên được hình thành dựa trên hai quy tắc hiển thị chính trong HTML:
    Phần tử Block (Thẻ <div>):
    Các thẻ <div> là phần tử khối. Đặc điểm của chúng là luôn bắt đầu trên một dòng mới và chiếm toàn bộ chiều ngang khả dụng của trình duyệt.
    Vì vậy: "Hộp 1", "Hộp 2" và "Hộp 3" mỗi cái nằm riêng biệt trên một dòng.
    Phần tử Inline (Thẻ <span> và <strong>):
    Các thẻ <span> và <strong> là phần tử nội dòng. Chúng không bắt đầu trên dòng mới mà chỉ chiếm khoảng không gian vừa đủ với nội dung bên trong. Các phần tử inline sẽ nằm sát cạnh nhau trên cùng một dòng cho đến khi hết chiều rộng màn hình.
    Vì vậy: "Text A" và "Text B" sẽ đi liền nhau trên một dòng. Tương tự, "Text C" và "Text D" cũng nằm cạnh nhau trên một dòng.
Câu A4: Cấu trúc Table và Layout trang web:
1. Sự khác nhau giữa <thead>, <tbody>, và <tfoot>:
    Các thẻ này giúp phân chia bảng thành các phần logic rõ ràng, giúp trình duyệt và các thiết bị hỗ trợ hiểu được cấu trúc dữ liệu:
    <thead> (Table Header): Dùng để bao nhóm các hàng chứa tiêu đề của các cột. Khi bảng quá dài và phải in ra nhiều trang, trình duyệt thường lặp lại phần header này ở đầu mỗi trang để người dùng dễ theo dõi.
    <tbody> (Table Body): Chứa nội dung chính (dữ liệu) của bảng. Một bảng có thể có nhiều <tbody> để phân nhóm các tập dữ liệu khác nhau.
    <tfoot> (Table Footer): Dùng để bao nhóm các hàng tổng kết (ví dụ: tổng tiền, ghi chú cuối bảng). Thông thường, footer sẽ hiển thị ở dưới cùng của bảng.
2. Tại sao KHÔNG NÊN dùng table để tạo layout trang web?
Lý do:
     Khó đáp ứng giao diện linh hoạt (Responsive): Table được thiết kế để hiển thị dữ liệu dạng hàng và cột cố định. Việc ép một cái table hiển thị tốt trên cả màn hình máy tính rộng và màn hình điện thoại dọc là cực kỳ khó khăn so với việc dùng CSS (Flexbox hoặc Grid).
    Ảnh hưởng đến hiệu suất (Performance): Trình duyệt thường phải đợi tải xong toàn bộ nội dung của table thì mới có thể tính toán kích thước và hiển thị lên màn hình. Điều này khiến người dùng cảm thấy trang web load chậm hơn.
    Tệ cho SEO và Accessibility: Các công cụ tìm kiếm (như Google) sẽ gặp khó khăn khi cố gắng đọc hiểu nội dung trang web nếu các đoạn văn bản bị chia nhỏ vào các ô bảng. Ngoài ra, trình đọc màn hình cho người khiếm thị sẽ đọc table theo thứ tự hàng/cột, khiến nội dung trang web trở nên lộn xộn, không logic.
Bài B3:
Danh sách các lối:
    Lỗi 1: Dòng 1 — <!DOCTYPE> thiếu "html" — Sửa thành <!DOCTYPE html>
    Lỗi 2: Dòng 2 — Thẻ <html> thiếu thuộc tính lang — Thêm lang="vi"
    Lỗi 3: Dòng 4 — Thẻ <title> không đóng — Thêm </title>
    Lỗi 4: Dòng 5 — charset sai cú pháp "utf8" — Sửa thành "UTF-8"
    Lỗi 5: Dòng 8 — Thẻ <h1> không đóng đúng — Sửa </h1>
    Lỗi 6: Dòng 12 — Thẻ <a> không đóng — Thêm </a>
    Lỗi 7: Dòng 12,13 — Link không phải nội bộ — Sửa href="home" → href="#home"
    Lỗi 8: Dòng 18 — <img> thiếu dấu ngoặc kép và alt — Sửa src="iphone.jpg" và thêm alt
    Lỗi 9: Dòng 20 — Thẻ <b> đóng sai vị trí — Sửa lại thành <strong>... </strong>
    Lỗi 10: Dòng 25 — Bảng thiếu <thead> và <tbody> — Thêm semantic table
    Lỗi 11: Dòng 36 — Dùng 2 thẻ <main> — Chỉ được dùng 1, đổi cái thứ 2 thành <aside>
    Lỗi 12: Dòng 41 — Thẻ <p> trong footer không đóng — Thêm </p>
Câu 4:
senmantic HTML5:
    Thẻ <header>: * Vị trí: Nằm ngay đầu tiên trong thẻ <body>, bao bọc toàn bộ khu vực nhận diện thương hiệu.
    Nội dung: Đóng vai trò là "vùng chứa giới thiệu", bao gồm Logo Tiki, thanh Search và cụm điều hướng tài khoản/giỏ hàng.
    Thẻ <nav>:
    Vị trí: Thường nằm dưới thanh tìm kiếm hoặc bên trong menu danh mục bên trái.
    Nội dung: Chứa các đường link điều hướng quan trọng giúp người dùng di chuyển giữa các danh mục sản phẩm chính.
    Thẻ <footer>:
    Vị trí: Nằm ở cuối cùng của trang web (cuộn hết tab Elements sẽ thấy).
    Nội dung: Chứa các thông tin về chính sách, địa chỉ công ty và các liên kết mạng xã hội.
Thẻ <table>
    Nội dung hiển thị: Đây là bảng dữ liệu cấu trúc mô tả các thuộc tính kỹ thuật của sản phẩm (ví dụ: Dung lượng PIN, Chipset, Độ phân giải màn hình).
    Cấu trúc kỹ thuật: * Phần lớn các bảng trên Tiki hiện nay sử dụng cấu trúc <tbody> trực tiếp để liệt kê các dòng <tr> mà không có tiêu đề cột rõ ràng (<thead>), vì bảng này chỉ gồm 2 cột (Tên thuộc tính - Giá trị).
Thẻ <form>
    Vị trí: Nằm trong khu vực trung tâm của thẻ <header>.
    Thuộc tính kỹ thuật:
    action: /search (Giá trị này xác định nơi dữ liệu sẽ được gửi đến máy chủ để xử lý).
    method: GET (Dữ liệu tìm kiếm sẽ được hiển thị ngay trên thanh địa chỉ URL, ví dụ: q=iphone).
    Các loại Input type được dùng:
    type="text": Để người dùng nhập từ khóa.
    type="button" hoặc type="submit": Cho nút bấm tìm kiếm (biểu tượng kính lúp).
    Đôi khi có thẻ <input type="hidden">: Dùng để gửi các tham số ẩn như mã định danh hoặc nguồn truy cập mà người dùng không nhìn thấy.
Câu C1:
<!-- 
  TRANG CHI TIẾT SẢN PHẨM (Shopee/Tiki style)
  Chỉ cấu trúc HTML, không nội dung thật
-->

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết sản phẩm - iPhone 16</title>
</head>
<body>

    <!-- ================= HEADER ================= -->
    <header> <!-- header: chứa các thành phần giới thiệu/điều hướng chính của trang -->
        <div class="logo"> <!-- div: khối trung tính để chứa logo, không có ý nghĩa ngữ nghĩa đặc biệt -->
            <a href="/">Logo</a> <!-- a: liên kết về trang chủ -->
        </div>
        <form role="search"> <!-- form: dùng để gửi dữ liệu tìm kiếm; role="search" giúp trình đọc màn hình hiểu đây là chức năng tìm kiếm -->
            <input type="search" placeholder="Tìm kiếm sản phẩm..."> <!-- input type="search": chuyên dụng cho ô tìm kiếm -->
            <button type="submit">Tìm</button> <!-- button: nút tương tác để gửi form -->
        </form>
        <div class="user-actions"> <!-- div: nhóm các hành động của người dùng (giỏ hàng, đăng nhập) -->
            <a href="/cart">Giỏ hàng</a>
            <a href="/login">Đăng nhập</a>
        </div>
    </header>

    <!-- ================= NAVIGATION (MENU CHÍNH) ================= -->
    <nav> <!-- nav: khu vực chứa các liên kết điều hướng chính của trang -->
        <ul> <!-- ul: danh sách không có thứ tự cho menu (vì các mục menu không cần theo thứ tự ưu tiên) -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/electronics">Điện thoại</a></li>
            <li><a href="/laptop">Laptop</a></li>
            <li><a href="/accessories">Phụ kiện</a></li>
            <li><a href="/promotion">Khuyến mãi</a></li>
        </ul>
    </nav>

    <!-- ================= BREADCRUMB ================= -->
    <nav aria-label="breadcrumb"> <!-- nav: đây là điều hướng phụ; aria-label giúp phân biệt với nav chính -->
        <ol> <!-- ol: breadcrumb thể hiện thứ tự các cấp (Trang chủ > Điện thoại > iPhone 16) nên dùng danh sách có thứ tự -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/category/dien-thoai">Điện thoại</a></li>
            <li aria-current="page">iPhone 16</li> <!-- aria-current="page": báo cho trình đọc màn hình biết đây là trang hiện tại -->
        </ol>
    </nav>

    <!-- ================= MAIN CONTENT (2 CỘT: SẢN PHẨM + SIDEBAR) ================= -->
    <main> <!-- main: nội dung chính, duy nhất của trang -->

        <!-- KHU VỰC CHI TIẾT SẢN PHẨM (CỘT TRÁI) -->
        <div class="product-detail"> <!-- div: bao ngoài toàn bộ thông tin sản phẩm, chưa có thẻ semantic phù hợp hơn -->

            <!-- === 1. KHU VỰC ẢNH SẢN PHẨM (5 ẢNH) === -->
            <div class="product-gallery"> <!-- div: khu vực chứa thư viện ảnh -->
                <div class="main-image"> <!-- div: ảnh chính lớn -->
                    <img src="placeholder-main.jpg" alt="iPhone 16 - Ảnh chính"> <!-- img: hiển thị ảnh sản phẩm; alt: mô tả cho trình đọc màn hình -->
                </div>
                <div class="thumbnail-list"> <!-- div: nhóm ảnh nhỏ (thumbnail) -->
                    <ul> <!-- ul: danh sách không thứ tự cho các thumbnail (vì không cần thứ tự) -->
                        <li><img src="thumb1.jpg" alt="iPhone 16 - Góc 1"></li> <!-- li: từng thumbnail -->
                        <li><img src="thumb2.jpg" alt="iPhone 16 - Góc 2"></li>
                        <li><img src="thumb3.jpg" alt="iPhone 16 - Góc 3"></li>
                        <li><img src="thumb4.jpg" alt="iPhone 16 - Góc 4"></li>
                        <li><img src="thumb5.jpg" alt="iPhone 16 - Góc 5"></li>
                    </ul>
                </div>
            </div>

            <!-- === 2. THÔNG TIN SẢN PHẨM (tên, giá, đánh giá sao, mô tả) === -->
            <div class="product-info"> <!-- div: khu vực thông tin chi tiết -->

                <h1>iPhone 16 Pro Max</h1> <!-- h1: tên sản phẩm là tiêu đề quan trọng nhất của trang -->

                <div class="rating"> <!-- div: nhóm thông tin đánh giá -->
                    <span class="stars">★★★★☆</span> <!-- span: inline, hiển thị số sao (dùng entity hoặc icon) -->
                    <span class="review-count">(120 đánh giá)</span>
                </div>

                <div class="price"> <!-- div: khu vực giá tiền -->
                    <span class="current-price">29.990.000 ₫</span> <!-- span: giá hiện tại -->
                    <del class="old-price">32.990.000 ₫</del> <!-- del: giá cũ (đã bị gạch bỏ) -->
                </div>

                <div class="description"> <!-- div: mô tả sản phẩm -->
                    <p>iPhone 16 Pro Max với chip A18 Pro, màn hình Super Retina XDR, camera 48MP...</p> <!-- p: đoạn văn bản mô tả -->
                </div>

                <!-- Nút thêm vào giỏ hàng -->
                <button class="add-to-cart">Thêm vào giỏ</button> <!-- button: hành động thêm vào giỏ -->
            </div>

            <!-- === 3. BẢNG THÔNG SỐ KỸ THUẬT === -->
            <div class="specifications"> <!-- div: khu vực thông số kỹ thuật -->
                <h2>Thông số kỹ thuật</h2> <!-- h2: tiêu đề cấp 2 cho phần thông số -->
                <table> <!-- table: dữ liệu dạng bảng, phù hợp nhất cho thông số kỹ thuật (dòng-cột) -->
                    <tbody> <!-- tbody: nhóm phần thân của bảng -->
                        <tr> <!-- tr: một hàng (màn hình) -->
                            <th scope="row">Màn hình</th> <!-- th: tiêu đề cho hàng, scope="row" giúp hiểu đây là tiêu đề của hàng này -->
                            <td>6.9 inch Super Retina XDR</td> <!-- td: dữ liệu tương ứng -->
                        </tr>
                        <tr>
                            <th scope="row">Chip</th>
                            <td>A18 Pro (3nm)</td>
                        </tr>
                        <tr>
                            <th scope="row">RAM</th>
                            <td>12GB</td>
                        </tr>
                        <tr>
                            <th scope="row">Camera sau</th>
                            <td>48MP chính + 12MP tele + 12MP ultra-wide</td>
                        </tr>
                        <tr>
                            <th scope="row">Pin</th>
                            <td>4676 mAh</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- === 4. KHU VỰC ĐÁNH GIÁ/BÌNH LUẬN === -->
            <div class="reviews"> <!-- div: khu vực đánh giá của người dùng -->
                <h2>Đánh giá & Bình luận</h2> <!-- h2: tiêu đề phần -->

                <!-- Form gửi bình luận -->
                <form class="review-form"> <!-- form: gửi bình luận mới -->
                    <label for="review-name">Tên của bạn</label> <!-- label: nhãn cho input, tăng khả năng truy cập -->
                    <input type="text" id="review-name" placeholder="Nhập tên">

                    <label for="review-text">Bình luận</label>
                    <textarea id="review-text" rows="3" placeholder="Mời bạn để lại đánh giá..."></textarea> <!-- textarea: nhập văn bản nhiều dòng -->

                    <button type="submit">Gửi bình luận</button>
                </form>

                <!-- Danh sách bình luận -->
                <ul class="review-list"> <!-- ul: danh sách các bình luận (không cần thứ tự) -->
                    <li> <!-- li: một bình luận -->
                        <strong>Nguyễn Văn A</strong> <!-- strong: nhấn mạnh tên người dùng (in đậm) -->
                        <span>★★★★★</span>
                        <p>Máy đẹp, pin trâu, camera xuất sắc!</p>
                    </li>
                    <li>
                        <strong>Trần Thị B</strong>
                        <span>★★★★☆</span>
                        <p>Màn hình quá đẹp, nhưng giá hơi cao.</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- === 5. SIDEBAR: SẢN PHẨM TƯƠNG TỰ === -->
        <aside class="similar-products"> <!-- aside: phần nội dung liên quan (sidebar) đến sản phẩm chính nhưng có thể tách rời -->
            <h2>Sản phẩm tương tự</h2> <!-- h2: tiêu đề phần sản phẩm tương tự -->
            <ul> <!-- ul: danh sách các sản phẩm gợi ý -->
                <li> <!-- li: một sản phẩm -->
                    <article class="product-card"> <!-- article: mỗi sản phẩm là một nội dung độc lập, có thể tái sử dụng -->
                        <img src="similar1.jpg" alt="iPhone 15 Pro Max">
                        <h3>iPhone 15 Pro Max</h3> <!-- h3: tên sản phẩm (cấp thấp hơn h2 của aside) -->
                        <p>28.990.000 ₫</p>
                    </article>
                </li>
                <li>
                    <article class="product-card">
                        <img src="similar2.jpg" alt="Samsung Galaxy S24 Ultra">
                        <h3>Samsung Galaxy S24 Ultra</h3>
                        <p>26.990.000 ₫</p>
                    </article>
                </li>
                <li>
                    <article class="product-card">
                        <img src="similar3.jpg" alt="Xiaomi 14 Ultra">
                        <h3>Xiaomi 14 Ultra</h3>
                        <p>21.990.000 ₫</p>
                    </article>
                </li>
            </ul>
        </aside>
    </main>

    <!-- ================= FOOTER ================= -->
    <footer> <!-- footer: chứa thông tin chân trang, bản quyền, liên hệ -->
        <div class="footer-links"> <!-- div: nhóm các liên kết footer -->
            <ul>
                <li><a href="/about">Giới thiệu</a></li>
                <li><a href="/privacy">Chính sách bảo mật</a></li>
                <li><a href="/terms">Điều khoản sử dụng</a></li>
                <li><a href="/contact">Liên hệ</a></li>
            </ul>
        </div>
        <div class="copyright"> <!-- div: bản quyền -->
            <p>&copy; 2026 Công ty TNHH Bán lẻ. Tất cả quyền được bảo lưu.</p> <!-- p: đoạn văn bản copyright -->
        </div>
    </footer>

</body>
</html>
câu C2:
    Thứ nhất là SEO: mấy thẻ như <header>, <nav>, <article> giúp Google hiểu cấu trúc trang rõ hơn. Nếu toàn <div> thì nội dung chính, menu hay footer đều giống nhau → khó index tốt.
    Thứ hai là Accessibility: người dùng dùng screen reader sẽ dựa vào semantic HTML để di chuyển nhanh trong trang (ví dụ nhảy đến menu hoặc nội dung chính). Nếu chỉ dùng <div> thì gần như mất hết lợi ích này, lại phải thêm ARIA khá rắc rối.
    Ví dụ đơn giản: làm trang blog. Nếu bạn dùng <article> cho mỗi bài viết, <h1> cho tiêu đề thì cả Google và screen reader đều hiểu đây là một bài độc lập → dễ đọc, dễ tìm hơn. Còn nếu chỉ là <div class="post"> thì về mặt máy móc nó không “biết” đây là cái gì.
    Tuy nhiên, không phải lúc nào cũng cần semantic. Những phần chỉ để chia layout như wrapper, flexbox, grid, hoặc animation thì dùng <div> là hợp lý.
    Nói ngắn gọn: <div> không sai, nhưng dùng hết mọi thứ bằng <div> thì giống như viết code không có kiểu dữ liệu — vẫn chạy, nhưng khó hiểu và khó tối ưu.
