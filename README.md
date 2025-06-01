# WebHeHon
🎯 Tên Project: MON AMOUR
📝 Mô tả tổng quan:
MON AMOUR là một ứng dụng web hẹn hò trực tuyến giúp người dùng tạo hồ sơ cá nhân, khám phá người phù hợp theo sở thích, vị trí và tiêu chí cá nhân, đồng thời có thể trò chuyện, kết bạn hoặc hẹn hò. Giao diện hiện đại, thân thiện với thiết bị di động, truyền cảm hứng từ Instagram và Tinder.

🔧 Công nghệ sử dụng:
Frontend: HTML, CSS (Tailwind), JavaScript (ReactJS)

Backend: Node.js + Express

Cơ sở dữ liệu: MongoDB / MySQL

Realtime Chat: Socket.IO

Authentication: JWT (JSON Web Token), OAuth2 (Google)

Triển khai: Vercel (Frontend), Render/Heroku (Backend)

🧩 Tính năng chính:
1. Đăng ký / Đăng nhập:
Xác thực bằng email hoặc Google.

Mã hóa mật khẩu bằng bcrypt.

Giao diện đơn giản, dễ dùng.

2. Tạo và chỉnh sửa hồ sơ cá nhân:
Tải ảnh đại diện, viết mô tả ngắn, chọn giới tính, sở thích.

Thiết lập vị trí và giới hạn tìm kiếm theo khoảng cách.

3. Gợi ý ghép đôi (Matching):
Xem danh sách người dùng phù hợp dựa trên thuật toán so khớp (giới tính, độ tuổi, sở thích).

Có thể vuốt trái/phải giống Tinder hoặc nhấn nút "Like" / "Bỏ qua".

4. Trò chuyện (Chat):
Khi hai người cùng "Like" nhau, hệ thống tạo một phòng chat riêng.

Giao tiếp thời gian thực bằng Socket.IO.

Hỗ trợ gửi ảnh, emoji.

5. Tìm kiếm nâng cao:
Bộ lọc theo vị trí, độ tuổi, giới tính, sở thích.

Hiển thị kết quả dạng thẻ với ảnh đại diện và mô tả ngắn.

6. Hệ thống thông báo:
Gửi thông báo khi có người like bạn, match thành công, hoặc có tin nhắn mới.

🎨 Giao diện (UI/UX):
Lấy cảm hứng từ Instagram (trang profile) và Tinder (trang vuốt).

Thiết kế responsive, tương thích cả desktop và mobile.

Tông màu ấm, dễ chịu (hồng pastel, trắng, tím nhẹ).

🔐 Bảo mật:
Mã hóa dữ liệu nhạy cảm.

Chống tấn công XSS, CSRF.

Phân quyền người dùng cơ bản (user, admin).

🧠 Khả năng mở rộng (Future features):
Tích hợp AI gợi ý người phù hợp.

Cuộc gọi video.

Gợi ý địa điểm hẹn hò gần nhất.

Tích hợp chatbot hỗ trợ người dùng mới.
