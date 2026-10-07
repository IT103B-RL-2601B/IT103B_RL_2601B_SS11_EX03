### Bảng so sánh Trade-off

| Tiêu chuẩn                   | Function Declaration                                               | Function Expression                                         | Arrow Function (`=>`)                                     |
| ------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------- | ----------------------------------------------------------- |
| **Cơ chế Hoisting**    | Được nâng lên đầu phạm vi (gọi trước khi định nghĩa) | Không được nâng (phải định nghĩa trước khi gọi) | Không được nâng (phải định nghĩa trước khi gọi) |
| **Cú pháp**            | Dài, dùng từ khóa`function`                                  | Gán vào biến`const fn = function`                      | Ngắn gọn, hỗ trợ*implicit return*                     |
| **Con trỏ`this**`           | Động (phụ thuộc ngữ cảnh gọi hàm)                          | Động (phụ thuộc ngữ cảnh gọi hàm)                   | Kế thừa từ ngữ cảnh bao ngoài (*Lexical`this*`)     |
| **Đối tượng`arguments**` | Có sẵn                                                           | Có sẵn                                                    | Không có (dùng rest parameter`...args`)                |
| **Khuyến nghị chuẩn** | Dùng cho các hàm tiện ích toàn cục                          | Dùng khi cần hàm ẩn danh                                | **Khuyến nghị chuẩn ES6+ cho toàn dự án**       |
