  // Ẩn chat rule
function hideChatRules() {
  document.getElementById("chatRules").style.display = "none";
}
  // Message
function sendMessage() {
  // Lấy tham chiếu đến trường nhập liệu và khu vực hiển thị nội dung chat
  const chatInput = document.getElementById("chatInput");
  const chatContent = document.getElementById("chatContent");

  // Lấy giá trị của trường nhập liệu và loại bỏ khoảng trắng thừa
  const message = chatInput.value.trim();

  // Kiểm tra xem ô nhập liệu không trống
  if (message !== "") {
    // Tạo một phần tử đoạn văn mới để chứa tin nhắn
    const newMessage = document.createElement("p");
    newMessage.classList.add("chat-message", "user-message"); // Thêm lớp chat-message để áp dụng kiểu dáng
    newMessage.innerHTML = `<strong>You:</strong> ${message}`; // Định dạng tin nhắn

    // Thêm phần tử tin nhắn mới vào nội dung chat
    chatContent.appendChild(newMessage);

    // Xóa nội dung của trường nhập liệu sau khi gửi tin nhắn
    chatInput.value = "";

    // Tự động cuộn xuống cuối của khu vực nội dung chat để hiển thị tin nhắn mới nhất
    chatContent.scrollTop = chatContent.scrollHeight;
  }
}

// Tuỳ chọn: Kích hoạt sendMessage() khi nhấn phím Enter trong ô nhập liệu
document.getElementById("chatInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Search
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.querySelector(".nav-center input");
const dropdown = document.getElementById("searchDropdown");

// Function to toggle dropdown
function toggleDropdown() {
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}

// Show dropdown on search button or input click
searchBtn.addEventListener("click", toggleDropdown);
searchInput.addEventListener("click", toggleDropdown);

// Close dropdown if clicking outside of search area
window.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target) && event.target !== searchBtn && event.target !== searchInput) {
        dropdown.style.display = "none";
    }
});