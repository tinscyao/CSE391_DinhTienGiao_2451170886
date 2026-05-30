# 🌤️ Weather App - Ứng dụng Thời tiết

## Mô tả
Ứng dụng tra cứu thời tiết theo tên thành phố, sử dụng Fetch API và async/await.

## API sử dụng
- **Geocoding API:** `https://geocoding-api.open-meteo.com/v1/search` - Chuyển tên thành phố → tọa độ
- **Weather API:** `https://api.open-meteo.com/v1/forecast` - Lấy thời tiết theo tọa độ

## Cách chạy
1. Mở file `index.html` bằng trình duyệt (Chrome, Firefox, Edge...)
2. Hoặc dùng Live Server trong VS Code

## Chức năng
- ✅ Nhập tên thành phố và tìm kiếm
- ✅ Hiển thị: Nhiệt độ, Độ ẩm, Tốc độ gió, Cảm giác như
- ✅ 3 States: Loading (spinner) → Success (thông tin) → Error (thông báo lỗi)
- ✅ Lưu lịch sử tìm kiếm vào LocalStorage (5 thành phố gần nhất)
- ✅ Click lịch sử để tìm lại

## Cấu trúc file
```
weather_app/
├── index.html    # Giao diện HTML
├── style.css     # Styles CSS
├── script.js     # Logic JavaScript
└── README.md     # File này
```

## Kiến thức sử dụng
- Fetch API
- async/await
- try-catch
- DOM manipulation
- LocalStorage
