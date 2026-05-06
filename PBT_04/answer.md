Câu A1:
Position            Vẫn chiếm chỗ trong flow            Tham chiếu vị trí (Offset base)             Cuộn theo trang             Use case điển hình
static                      Có                          "Không thể dùng offset (top, left...)"              Có              Giá trị mặc định của mọi phần tử.
relative                    Có                              Vị trí ban đầu của chính nó                     Có              Làm gốc tọa độ cho phần tử con dùng absolute.
absolute                   Không                    Tổ tiên gần nhất có position (không phải static)        Có              "Tạo các icon thông báo, menu dropdown, tooltip."
fixed                      Không                    Cửa sổ trình duyệt (Viewport)                           Không               Thanh Header/Navigation luôn cố định khi cuộn.
sticky                      Có                          Tổ tiên gần nhất có cơ chế cuộn                     Có             Tiêu đề bảng hoặc mục lục luôn dính ở trên đầu khi cuộn qua.

Giải thích Absolute & Tổ tiên
Khi nào tham chiếu body? Khi tất cả tổ tiên (cha, ông...) đều là static. Nó sẽ nhảy ra ngoài để tìm mốc là khung màn hình.

Khi nào tham chiếu Parent? Khi phần tử cha có position: relative (hoặc absolute, fixed).

Nearest Positioned Ancestor (Tổ tiên gần nhất có vị trí):

Bạn cứ tưởng tượng absolute là một đứa trẻ đi tìm "điểm tựa".

Nó sẽ nhìn ngược lên cha, rồi ông, rồi cụ...

Ai là người đầu tiên có position khác static thì nó sẽ "bám" vào người đó để tính tọa độ. Nếu không ai có, nó bám vào body.

Câu A2:
### Trường hợp 1: Flexbox cơ bản (Mặc định)
*   **Bố cục:** 1 hàng duy nhất, 4 cột bằng nhau.
*   **Giải thích:** `flex: 1` chia đều không gian cho tất cả các item trong hàng.

[  Item 1  ][  Item 2  ][  Item 3  ][  Item 4  ]

### Trường hợp 2: Flex Wrap (Đa hàng)
*   **Bố cục:** 3 hàng, mỗi hàng 2 cột.
*   **Giải thích:** Mỗi item chiếm 45% + 2.5% margin mỗi bên = 50% chiều rộng. Vì có `flex-wrap: wrap`, item thứ 3 sẽ nhảy xuống hàng mới.

[ Item 1 ]   [ Item 2 ]
[ Item 3 ]   [ Item 4 ]
[ Item 5 ]   [ Item 6 ]


### Trường hợp 3: Căn chỉnh (Alignment)
*   **Bố cục:** 1 hàng, 3 items nằm ở: Trái - Giữa - Phải, căn giữa theo chiều dọc.
*   **Giải thích:** `space-between` đẩy item đầu và cuối ra sát biên, item còn lại nằm chính giữa.


[ Item 1 ]      [ Item 2 ]      [ Item 3 ]

### Trường hợp 4: Grid Layout (Cố định & Co giãn)
*   **Bố cục:** 1 hàng, 3 cột. Cột trái và phải rộng 200px, cột giữa co giãn chiếm hết phần còn lại.
*   **Giải thích:** `1fr` là đơn vị linh hoạt chiếm khoảng trống dư thừa ở giữa hai cột cố định.

[ 200px ] [      Flexible Mid      ] [ 200px ]



### Trường hợp 5: Grid Repeat & Gap
*   **Bố cục:** 3 hàng. Hàng 1 (3 items), hàng 2 (3 items), hàng 3 (1 item nằm ở cột đầu tiên).
*   **Giải thích:** `repeat(3, 1fr)` tạo 3 cột bằng nhau. Item thứ 7 không có định nghĩa hàng nên tự động rơi xuống hàng mới và nằm ở cột 1.

[ Item 1 ] [ Item 2 ] [ Item 3 ]
    (gap 10px)
[ Item 4 ] [ Item 5 ] [ Item 6 ]
    (gap 10px)
[ Item 7 ]

